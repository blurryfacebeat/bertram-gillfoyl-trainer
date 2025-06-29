import { render, screen } from '@testing-library/vue';
import BaseButton from '../base-button.vue';

test('кнопка отображается', () => {
  render(BaseButton);

  expect(screen.getByRole('button')).toBeInTheDocument();
});
