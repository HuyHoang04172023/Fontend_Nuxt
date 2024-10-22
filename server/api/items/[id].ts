import { defineEventHandler, readBody } from 'h3';

let items = [{ id: 1, name: 'Item 123' }];

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const id = parseInt(event.context.params?.id as string);
  
  if (method === 'PUT') {
    const body = await readBody(event);
    items = items.map(item => item.id === id ? { ...item, ...body } : item);
    return items.find(item => item.id === id);
  } else if (method === 'DELETE') {
    const index = items.findIndex(item => item.id == id);
    if (index === -1) {
      return { success: false, message: 'Item not found' };
    }
    items.splice(index, 1);
    return { success: true };
  }
});
