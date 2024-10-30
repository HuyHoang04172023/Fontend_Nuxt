// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
      if (!isAuthenticated && to.path !== '/auth/login') {
        return navigateTo('/auth/login')
      }
    }
  })
  