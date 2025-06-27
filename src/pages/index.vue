<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <button @click="navigateTo('/app')">Go to App</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'landing-layout' });
</script>
