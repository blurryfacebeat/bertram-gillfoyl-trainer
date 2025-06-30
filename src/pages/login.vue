<template>
  <div class="login">
    <h1>Войти</h1>
    <form @submit.prevent="onSubmit">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Пароль" />
      <button>Войти</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { useAuthService } from '~/api/services/auth.service';

definePageMeta({
  layout: 'landing-layout',
});

const email = ref('test@example.com');
const password = ref('password');
const error = ref('');

const { login } = useAuthService();

const onSubmit = async () => {
  try {
    await login(email.value, password.value);
    await navigateTo('/app');
  } catch {
    error.value = 'Неверные учетные данные';
  }
};
</script>
