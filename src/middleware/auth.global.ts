export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token').value;

  if (to.path === '/') {
    return;
  }

  if (token && to.path === '/login') {
    return navigateTo('/app');
  }

  if (!token) {
    return navigateTo('/login');
  }
});
