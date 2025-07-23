<template>
  <header class="app-header" role="banner">
    <div class="app-header__left">
      <NuxtLink to="/" class="app-header__logo" aria-label="На главную"> JS Trainer </NuxtLink>
    </div>
    <div class="app-header__right">
      <LanguagePicker />

      <BaseDropdown label="Профиль">
        <!-- Дропдаун содержимое -->
      </BaseDropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseDropdown from '~/shared/components/base-dropdown/base-dropdown.vue';
import LanguagePicker from '~/features/language-picker/language-picker.vue';
</script>

<style scoped lang="scss">
@use '@/shared/styles/mixins.scss' as *;
@use '@/shared/styles/breakpoints.scss' as *;

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0 1rem;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);

  &__right {
    display: grid;
    gap: 10px;
    align-items: center;
    justify-content: center;
    grid-auto-flow: column;
  }
}

.app-header__logo {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
}
</style>
