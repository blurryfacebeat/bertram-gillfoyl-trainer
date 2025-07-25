<template>
  <aside class="app-sidebar" aria-label="Навигация">
    <NuxtImg aria-label="Логотип" src="/images/bgt-logo.png" width="150" height="150" />
    <AppLayoutSidebarNav />
  </aside>
</template>

<script setup lang="ts">
import AppLayoutSidebarNav from '~/features/app-layout/app-layout-sidebar/ui/app-layout-sidebar-nav.vue';
</script>

<style scoped lang="scss">
@use '~/shared/styles/mixins' as *;
@use '~/shared/styles/breakpoints' as *;

.app-sidebar {
  width: var(--sidebar-width);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--space-16);

  background: var(--decoration-bg-2);
  border-right: 1px solid var(--color-muted-2);
}
</style>
