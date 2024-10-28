import { readdirSync } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const cacheControlHeader = {
    'Cache-Control': 'public, max-age=3600',
  };

  // Gửi header caching
  event.res.setHeader('Cache-Control', cacheControlHeader['Cache-Control']);

  const imagesDir = path.resolve('./public/images');
  
  const files = readdirSync(imagesDir);

  const images = files.map((file, index) => ({
    id: index + 1,
    src: `/images/${file}`,
    alt: `Image ${index + 1}`
  }));

  return images;
});
