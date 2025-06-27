<template>
  <div class="layout-app">
    <Header />
    <Sidebar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/shared/components/Header.vue';
import Sidebar from '@/shared/components/Sidebar.vue';
</script>
