<template>
  <span aria-label="base-loader" :class="classOptions" />
</template>

<script setup lang="ts">
type LoaderProps = {
  isPrimary?: boolean;
};

const { isPrimary } = defineProps<LoaderProps>();

const classOptions = ['base-loader', { 'base-loader_primary': isPrimary }];
</script>

<style scoped lang="scss">
.base-loader {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 5px solid var(--color-bg);
    animation: prixClipFix 2s linear infinite;
  }

  &_primary {
    &::before {
      border-color: var(--color-primary);
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
