import { useLanguage } from '~/i18n/use-language';
import { AvailableLanguage } from '~/i18n/i18n.types';

export default defineNuxtPlugin(() => {
  const { $i18n } = useNuxtApp();
  const { getLanguage } = useLanguage();

  $i18n.locale.value = getLanguage() || AvailableLanguage.ru;
});
