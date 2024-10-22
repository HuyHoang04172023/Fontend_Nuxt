import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  return {
    message: 'Hello from Nuxt API!',
    data: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ]
  }
})
