<template>
  <div ref="dropdownRef" class="dropdown">
    <button
      :id="buttonId"
      class="dropdown__toggle"
      :aria-expanded="isOpen"
      :aria-controls="dropdownId"
      @click="toggle"
    >
      {{ label }}
      <span aria-hidden="true">▾</span>
    </button>

    <div
      v-if="isOpen"
      :id="dropdownId"
      class="dropdown__menu"
      role="menu"
      :aria-labelledby="buttonId"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

defineProps<{
  label: string;
}>();

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const dropdownRef = ref<HTMLElement | null>(null);
onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});

const idBase = useId();
const dropdownId = `dropdown-${idBase}`;
const buttonId = `dropdown-button-${idBase}`;
</script>

<style scoped lang="scss">
@use '@/shared/styles/mixins.scss' as *;
@use '@/shared/styles/variables.scss' as *;

.dropdown {
  position: relative;
  display: inline-block;

  &__toggle {
    background: none;
    border: 1px solid var(--color-border);
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    margin-top: 0.25rem;
    z-index: 10;
    padding: 0.5rem 0;
    min-width: 160px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>
