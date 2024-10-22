import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  return {
    success: true,
    users: [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 35 }
    ]
  }
})
