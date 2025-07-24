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
import { useLanguage } from '~/i18n/use-language';
import { AvailableLanguage } from '~/i18n/i18n.types';

const { locale } = useI18n();
const { setLanguage } = useLanguage();

const languages: AvailableLanguage[] = [AvailableLanguage.ru, AvailableLanguage.us];

const handleClick = (newLocale: AvailableLanguage) => {
  locale.value = newLocale;
  setLanguage(newLocale);
};
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
