export default defineEventHandler (async (event) => {
    const id = event.context.params.id;
    const apiUrl = `https://jsonplaceholder.typicode.com/todos/${id}`;
    try {
        const response = await $fetch(apiUrl);
        return response;
    } catch (error) {
        return { error: 'Không thể lấy dữ liệu từ API' };
    }
});