<template>
  <header class="app-header" role="banner">
    <div class="app-header__left" />
    <div class="app-header__right">
      <LanguagePicker />
      <BaseDropdown>
        <BaseButton>Профиль</BaseButton>
        <template #menu>
          <div style="background-color: #fff">Simple Menu</div>
        </template>
      </BaseDropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseDropdown from '~/shared/components/base-dropdown/base-dropdown.vue';
import LanguagePicker from '~/features/language-picker/language-picker.vue';
import BaseButton from '~/shared/components/base-button/base-button.vue';
</script>

<style scoped lang="scss">
@use '@/shared/styles/mixins.scss' as *;
@use '@/shared/styles/breakpoints.scss' as *;

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: var(--space-16);

  background: var(--decoration-bg-1);
  border-bottom: 1px solid var(--color-muted-2);

  &__right {
    display: grid;
    gap: 10px;
    align-items: center;
    justify-content: center;
    grid-auto-flow: column;
  }
}
</style>
