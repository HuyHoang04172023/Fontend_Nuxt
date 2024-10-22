import { defineEventHandler, getQuery, readBody } from 'h3';

let items = [{ id: 1, name: 'Item 12' }];

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  if (method === 'GET') {
    return items;
  } else if (method === 'POST') {
    const body = await readBody(event);
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { id: newId, ...body };
    items.push(newItem);
    return newItem;
  }
});
