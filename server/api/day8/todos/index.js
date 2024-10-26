export default defineEventHandler (async (event) => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    try {
        const response = await $fetch(apiUrl);
        return response;
    } catch (error) {
        return { error: 'Không thể lấy dữ liệu từ API' };
    }
});