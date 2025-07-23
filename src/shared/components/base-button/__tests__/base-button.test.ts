import { render, screen } from '@testing-library/vue';
import BaseButton from '../base-button.vue';
import { describe, it, expect } from 'vitest';

describe('BaseButton', () => {
  it('отображает переданный текст через слот', () => {
    render(BaseButton, {
      slots: {
        default: 'Нажми меня',
      },
    });

    expect(screen.getByText('Нажми меня')).toBeInTheDocument();
  });

  it('добавляет класс base-button_primary, если isPrimary = true', () => {
    render(BaseButton, {
      props: {
        isPrimary: true,
      },
    });

    const button = screen.getByRole('button');
    expect(button.classList.contains('base-button_primary')).toBe(true);
  });

  it('не добавляет класс base-button_primary, если isPrimary = false', () => {
    render(BaseButton, {
      props: {
        isPrimary: false,
      },
    });

    const button = screen.getByRole('button');
    expect(button.classList.contains('base-button_primary')).toBe(false);
  });

  it('отображает BaseLoader, если isLoading = true', () => {
    render(BaseButton, {
      props: {
        isLoading: true,
      },
    });

    // Предполагается, что BaseLoader имеет тестовый идентификатор или aria-label
    expect(screen.getByLabelText('base-loader')).toBeInTheDocument();
  });

  it('не отображает BaseLoader, если isLoading = false', () => {
    render(BaseButton, {
      props: {
        isLoading: false,
      },
    });

    expect(screen.queryByTestId('base-loader')).not.toBeInTheDocument();
  });
});
