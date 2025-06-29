<template>
  <header class="app-header" role="banner">
    <div class="app-header__left">
      <NuxtLink to="/" class="app-header__logo" aria-label="На главную"> JS Trainer </NuxtLink>
    </div>
    <div class="app-header__right">
      <select v-model="lang" aria-label="Выбор языка" @change="changeLang">
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>

      <BaseDropdown label="Профиль">
        <!-- Дропдаун содержимое -->
      </BaseDropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import BaseDropdown from '@/shared/components/base-dropdown/base-dropdown.vue';

const { locale } = useI18n();
const lang = ref(locale.value);
const changeLang = () => (locale.value = lang.value);
</script>

<style scoped lang="scss">
@use '@/shared/styles/variables.scss' as *;
@use '@/shared/styles/mixins.scss' as *;

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0 1rem;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);

  @include respond-max($breakpoint-tablet) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    padding: 0.5rem;
  }
}

.app-header__logo {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
}
</style>
