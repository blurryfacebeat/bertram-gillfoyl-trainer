<template>
  <li class="app-sidebar__link">
    <NuxtLink :to="to">
      <p class="link__text"><slot /></p>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
type LinkProps = {
  to: string;
};

const { to } = defineProps<LinkProps>();
</script>

<style scoped lang="scss">
@use '~/shared/styles/mixins' as *;

.app-sidebar__link {
  @include default-transition();

  height: 42px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 1;

  border: 1px solid var(--color-muted-2);
  border-radius: 8px;
  cursor: pointer;
  background: transparent;

  &::before {
    @include default-transition();

    content: '';
    inset: 0;
    z-index: 0;
    position: absolute;

    opacity: 0;
    background: var(--decoration-bg-5);
  }

  &:hover {
    border-color: var(--color-primary-1);

    &::before {
      opacity: 1;
    }
  }

  .link__text {
    position: relative;
    z-index: 2;

    color: var(--color-text-1);
  }
}
</style>
