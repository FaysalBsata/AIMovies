import { pipeline, env } from '@xenova/transformers';
env.useBrowserCache = false;
const pipe = await pipeline('feature-extraction', 'Supabase/gte-small');
export const generateEmbedding = async (text) => {
  const output = await pipe(text, {
    normalize: true,
    pooling: 'mean',
  });
  return Array.from(output.data);
};
