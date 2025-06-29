import { render, screen } from '@testing-library/vue';
import LandingContent from '@/features/landing/landing-content.vue';
import i18nConfig from '@/../i18n.config';
import { createI18n } from 'vue-i18n';

test('отображается заголовок и кнопка', () => {
  const i18n = createI18n(i18nConfig);

  render(LandingContent, {
    global: {
      plugins: [i18n],
    },
  });

  expect(screen.getByText(i18n.global.t('welcome'))).toBeInTheDocument();
  expect(screen.getByRole('button', { name: i18n.global.t('startLearning') })).toBeInTheDocument();
});
