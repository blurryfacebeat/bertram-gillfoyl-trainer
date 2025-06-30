import { loginRequest, fetchMe } from '@/api/repositories/user.repository';
import type { UserModel } from '@/api/data/user.model';

export const useAuthService = () => {
  const user = useState<UserModel | null>('user', () => null);
  const tokenCookie = useCookie<string | null>('token');

  const login = async (email: string, password: string) => {
    const { token, user: fetchedUser } = await loginRequest(email, password);
    tokenCookie.value = token;
    user.value = fetchedUser;
  };

  const fetchUser = async () => {
    if (!tokenCookie.value) return;
    try {
      const me = await fetchMe(tokenCookie.value);
      user.value = me;
    } catch {
      user.value = null;
      tokenCookie.value = null;
    }
  };

  const logout = () => {
    user.value = null;
    tokenCookie.value = null;
  };

  return { user, login, fetchUser, logout };
};
