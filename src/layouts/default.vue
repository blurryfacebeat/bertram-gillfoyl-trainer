<template>
  <div class="app-layout">
    <AppHeader />
    <div class="app-layout__content">
      <AppSidebar />
      <main class="app-layout__main">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/features/app-layout/app-layout-header.vue';
import AppSidebar from '~/features/app-layout/app-layout-sidebar/app-layout-sidebar.vue';
</script>

<style scoped lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100dvh;
}

.app-layout__content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.app-layout__main {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}
</style>
