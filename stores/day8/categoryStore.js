import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: []
  }),
  actions: {
    addCategory(category) {
      this.categories.push(category)
    },
    getCategoryById(id) {
      return this.categories.find(category => category.id === id)
    },
    updateCategory(id, updatedCategory) {
      const index = this.categories.findIndex(category => category.id === id)
      if (index !== -1) {
        this.categories[index] = { ...this.categories[index], ...updatedCategory }
      }
    },
    deleteCategory(id) {
      this.categories = this.categories.filter(category => category.id !== id)
    }
  }
})
