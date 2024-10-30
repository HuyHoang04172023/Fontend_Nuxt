import { useState } from '#app';

export default defineNuxtPlugin(() => {
  const auth = useState('auth', () => ({
    isAuthenticated: false,
    user: null
  }));

  return {
    provide: {
      auth
    }
  };
});
