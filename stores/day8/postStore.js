import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: []
  }),
  actions: {
    addPost(post) {
      this.posts.push(post)
    },
    getPostById(id) {
      return this.posts.find(post => post.id === id)
    },
    updatePost(id, updatedPost) {
      const index = this.posts.findIndex(post => post.id === id)
      if (index !== -1) {
        this.posts[index] = { ...this.posts[index], ...updatedPost }
      }
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id)
    }
  }
})
