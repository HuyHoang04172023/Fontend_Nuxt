import { defineEventHandler, getQuery, readBody } from 'h3';

let items = [{ id: 1, name: 'Item 1' }];

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;


  // Cập nhật item với id từ body


  if (method === 'GET') {
    return items;
  } else if (method === 'POST') {
    const body = await readBody(event);
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { id: newId, ...body };
    items.push(newItem);
    return newItem;
  } else if (method === 'PUT') {
    const body = await readBody(event);
    const { id } = body;
    items = items.map(item => item.id === id ? { ...item, ...body } : item);
    return items.find(item => item.id === id);
  } else if (method === 'DELETE') {
    const body = await readBody(event);
    const { id } = body;
    const index = items.findIndex(item => item.id == id);
    if (index === -1) {
      return { success: false, message: 'Item not found' };
    }
    items.splice(index, 1);
    return { success: true };
  }
});
