// server/api/products.js
import NodeCache from 'node-cache';

// Khởi tạo cache với TTL (Time to Live) là 1 giờ (3600 giây)
const cache = new NodeCache({ stdTTL: 3600 });

export default defineEventHandler(async (event) => {
  const cacheKey = 'products';

  // Kiểm tra nếu dữ liệu đã được cache
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  // Giả lập dữ liệu sản phẩm
  const products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
  ];

  // Lưu sản phẩm vào cache
  cache.set(cacheKey, products);
  return products;
});
