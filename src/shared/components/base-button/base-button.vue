<template>
  <button class="base-button" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: var(--color-bg, #111);
  color: var(--color-text, #fff);
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
