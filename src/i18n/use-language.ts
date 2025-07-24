import type { AvailableLanguage } from '~/i18n/i18n.types';

export const useLanguage = () => {
  const languageCookie = useCookie('language');

  const getLanguage = () => languageCookie.value;

  const setLanguage = (newLanguage: AvailableLanguage) => {
    languageCookie.value = newLanguage;
  };

  const removeLanguage = () => {
    languageCookie.value = null;
  };

  return { getLanguage, setLanguage, removeLanguage };
};
