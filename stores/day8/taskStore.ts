import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as { id: number, title: string, description: string }[],
    nextId: 1,
  }),
  actions: {
    addTask(title: string, description: string) {
      this.tasks.push({
        id: this.nextId++,
        title,
        description,
      })
    },
    updateTask(id: number, title: string, description: string) {
      const task = this.tasks.find(task => task.id === id)
      if (task) {
        task.title = title
        task.description = description
      }
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
  },
})
