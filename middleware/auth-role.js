export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const role = localStorage.getItem('role')
  
      if (to.meta.requiresRole && to.meta.requiresRole !== role) {
        return navigateTo('/auth/no-access')  
      }
    }
  })
  