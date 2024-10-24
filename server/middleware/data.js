
export default defineEventHandler(async (event) => {
  const path = event.node.path;
  if(path != '/day7/data'){
      return;
  }
  const response = await $fetch('https://jsonplaceholder.typicode.com/users');
  
  const modifiedData = response.map(item => {
    return {
      ...item,
      newField: 'Giá trị mới'
    };
  });

  return {
    success: true,
    data: modifiedData
  };
});
