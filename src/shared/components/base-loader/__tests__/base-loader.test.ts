import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import BaseLoader from '../base-loader.vue';

describe('BaseLoader', () => {
  it('BaseLoader отображается', () => {
    render(BaseLoader);

    expect(screen.getByLabelText('base-loader')).toBeInTheDocument();
  });

  it('к компоненту применяется класс base-loader_primary, если передан проп isPrimary', () => {
    render(BaseLoader, {
      props: {
        isPrimary: true,
      },
    });

    const loader = screen.getByLabelText('base-loader');

    expect(loader.classList.contains('base-loader_primary'));
  });
});
