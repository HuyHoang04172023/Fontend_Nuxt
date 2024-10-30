import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true
      this.user = user
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      useRouter().push('/login')
    },
  },
})
