<template>
  <div class="language-picker" aria-label="Change language" role="language picker">
    <Icon
      v-for="language in languages"
      :key="language"
      :name="`flagpack:${language}`"
      class="language-picker__icon"
      @click="handleClick(language)"
    />
  </div>
</template>

<script setup lang="ts">
import type { AvailableLanguage } from '~/shared/types';

const { locale } = useI18n();

const languages: AvailableLanguage[] = ['ru', 'us'];

function handleClick(newLocale: AvailableLanguage) {
  locale.value = newLocale;
}
</script>

<style scoped lang="scss">
.language-picker {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &__icon {
    cursor: pointer;
  }
}
</style>
