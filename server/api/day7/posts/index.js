export default defineEventHandler(async (event) => {
  const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

  if (event.node.req.method === 'GET') {
      try {
          const response = await $fetch(apiUrl);
          return response;
      } catch (error) {
          return { error: 'Không thể lấy dữ liệu từ API' };
      }
  } else if (event.node.req.method === 'POST') {
      try {
          const body = await readBody(event);

          if (!body.title || !body.body) {
              return { error: 'Tiêu đề và nội dung không được để trống' };
          }

          const response = await $fetch(apiUrl, {
              method: 'POST',
              body: {
                  title: body.title,
                  body: body.body,
                  userId: 1
              }
          });

          return response;
      } catch (error) {
          return { error: 'Lỗi khi gửi dữ liệu lên API' };
      }
  } else {
      return { error: 'Method không được hỗ trợ' };
  }
});
