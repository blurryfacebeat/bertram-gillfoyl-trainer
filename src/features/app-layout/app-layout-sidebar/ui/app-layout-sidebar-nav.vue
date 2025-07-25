<template>
  <nav class="app-sidebar__nav">
    <ul class="app-sidebar__links">
      <AppLayoutSidebarLink v-for="link in links" :key="link.to" :to="link.to">{{
        link.name
      }}</AppLayoutSidebarLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { Link } from '~/shared/types';
import AppLayoutSidebarLink from '~/features/app-layout/app-layout-sidebar/ui/app-layout-sidebar-link.vue';

const { t } = useI18n();

const links = computed<Link[]>(() => [
  {
    to: '/app',
    name: t('sidebar.dashboard'),
  },
  {
    to: '/app/editor',
    name: t('sidebar.editor'),
  },
]);
</script>

<style scoped lang="scss">
.app-sidebar__nav {
  width: 100%;
}

.app-sidebar__links {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: var(--space-12);
}
</style>
