// server/middleware/_requestLogger.js
export default defineEventHandler((event) => {
  // Sử dụng event.node.req để lấy thông tin request
  const { method, url } = event.node.req;
  const timestamp = new Date().toISOString();

  // Log thông tin request
  console.log(`[${timestamp}] ${method} ${url}`);
});
