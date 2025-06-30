import type { UserModel } from '@/api/data/user.model';

export const loginRequest = async (email: string, password: string) => {
  return await $fetch<{ token: string; user: UserModel }>('/api/auth/login', {
    method: 'POST',
    body: { email, password },
  });
};

export const fetchMe = async (token: string) => {
  return await $fetch<UserModel>('/api/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
};
