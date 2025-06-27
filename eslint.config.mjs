// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettierPlugin from 'eslint-plugin-prettier';

const prettierRules = {
  name: 'prettier',
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': ['error', {}, {}],
  },
};

// @ts-ignore
export default withNuxt().append(prettierRules);
