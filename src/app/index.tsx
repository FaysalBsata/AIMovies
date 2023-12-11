import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { supabase } from '../lib/supabase';
import MovieItem from '../components/MovieItem';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    (async () => {
      let { data: movies, error } = await supabase
        .from('movies')
        .select('*')
        .range(0, 20);
      if (movies) {
        setMovies(movies);
      }
      console.log(error);
    })();
  }, []);
  const onPress = async () => {
    const { data } = await supabase.functions.invoke('embed', {
      body: { input: query },
    });
    const { data: movies } = await supabase.rpc('match_movies', {
      query_embedding: data.embedding,
      match_threshold: 0.78,
      match_count: 15,
    });
    setMovies(movies);
    setQuery('');
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.searchConatiner}>
          <TextInput
            placeholder="AI: Search for movies...."
            placeholderTextColor={'gray'}
            style={styles.input}
            value={query}
            onChangeText={setQuery}
          />
          <Button title="Search" onPress={onPress} />
        </View>
        <FlatList data={movies} renderItem={MovieItem} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181413',
  },
  input: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'gray',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    color: 'gainsboro',
  },
  searchConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
