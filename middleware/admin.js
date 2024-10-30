export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useNuxtApp().$auth;
  
    if (!auth.user || !auth.user.isAdmin) {
      return navigateTo('/403'); // Redirect to forbidden page
    }
  });
  