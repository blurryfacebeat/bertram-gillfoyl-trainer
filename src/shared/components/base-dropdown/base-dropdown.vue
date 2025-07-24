<template>
  <div ref="dropdownRef" :aria-expanded="isOpen" class="dropdown">
    <div class="dropdown__trigger" @click="toggle">
      <slot />
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        :id="dropdownId"
        class="dropdown__menu"
        role="menu"
        :aria-labelledby="buttonId"
      >
        <slot name="menu" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

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

.dropdown {
  position: relative;

  &__trigger {
    cursor: pointer;
  }

  &__menu {
    position: absolute;
    top: 48px;
    left: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  @include default-transition();
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
