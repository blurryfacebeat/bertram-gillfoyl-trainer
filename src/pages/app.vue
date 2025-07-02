<template>
  <div>
    <p>Добро пожаловать, {{ user?.name || 'Загрузка...' }}!</p>
    <button @click="onLogout">Выйти</button>
  </div>
</template>

<script setup lang="ts">
import { useAuthService } from '~/api/services/auth.service';

const { user, fetchUser, logout } = useAuthService();

if (!user.value) {
  await fetchUser();
}

const onLogout = () => {
  logout();
  navigateTo('/login');
};
</script>
