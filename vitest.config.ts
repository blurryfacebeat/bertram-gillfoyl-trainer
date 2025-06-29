import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    setupFiles: './vitest.setup.ts',
    include: ['**/__tests__/**/*.{test,spec}.{ts,js}'],
  },
});
