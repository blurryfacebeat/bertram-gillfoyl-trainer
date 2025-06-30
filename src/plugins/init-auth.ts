import { useAuthService } from '~/api/services/auth.service';

export default defineNuxtPlugin(async () => {
  const { user, fetchUser } = useAuthService();

  if (!user.value) {
    await fetchUser();
  }
});
