export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token').value;

  if (['/', '/login'].includes(to.path)) return;

  if (!token) {
    return navigateTo('/login');
  }
});
