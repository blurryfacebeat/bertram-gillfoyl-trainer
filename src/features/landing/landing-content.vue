<template>
  <section class="landing-content">
    <h1 class="landing-title">{{ $t('landing.welcome') }}</h1>
    <BaseButton @click="navigateToApp">
      {{ $t('landing.startLearning') }}
    </BaseButton>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/shared/components/base-button/base-button.vue';

const router = useRouter();

const navigateToApp = () => {
  router.push('/app');
};
</script>

<style scoped lang="scss">
.landing-content {
  text-align: center;
}

.landing-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
