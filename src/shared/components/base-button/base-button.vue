<template>
  <button :class="classOptions">
    <BaseLoader v-if="isLoading" :is-primary="!isPrimary" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import BaseLoader from '~/shared/components/base-loader/base-loader.vue';

type BaseButtonProps = {
  isLoading?: boolean;
  isPrimary?: boolean;
};
const { isLoading, isPrimary } = defineProps<BaseButtonProps>();

const classOptions = ['base-button', { 'base-button_primary': isPrimary }];
</script>

<style scoped lang="scss">
@use '@/shared/styles/mixins.scss' as *;

.base-button {
  @include default-transition();

  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 8px 0;
  height: 40px;
  width: max-content;

  cursor: pointer;
  outline: none;
  background-color: var(--color-bg);
  border-radius: 8px;
  border: 1px solid var(--color-border-primary);

  &:hover {
    background-color: var(--color-bg-primary);
  }

  &:active {
    background-color: var(--color-bg-primary);
  }

  &_primary {
    color: var(--color-bg);

    background-color: var(--color-primary);
    border-color: var(--color-border-primary-seconds);

    &:hover {
      background-color: var(--color-primary-accent);
    }

    &:active {
      background-color: var(--color-primary-accent);
    }
  }
}
</style>
