<template>
  <p>Добро пожаловать, {{ user?.name || 'Загрузка...' }}!</p>
</template>

<script setup lang="ts">
import { useAuthService } from '~/api/services/auth.service';

const { user, fetchUser } = useAuthService();

if (!user.value) {
  await fetchUser();
}
</script>
