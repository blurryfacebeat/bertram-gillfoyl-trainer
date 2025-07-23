<template>
  <div>
    <p>Добро пожаловать, {{ user?.name || 'Загрузка...' }}!</p>
    <BaseButton is-loading is-primary @click="onLogout">Выйти</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useAuthService } from '~/api/services/auth.service';
import BaseButton from '~/shared/components/base-button/base-button.vue';

const { user, fetchUser, logout } = useAuthService();

if (!user.value) {
  await fetchUser();
}

const onLogout = () => {
  logout();
  navigateTo('/login');
};
</script>
