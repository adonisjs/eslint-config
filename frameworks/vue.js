import tseslint from 'typescript-eslint'
import vuePlugin from 'eslint-plugin-vue'
import { RULES_LIST } from '../index.js'

/**
 * Vue-specific ESLint config block. Make sure you have added [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) to your ``devDependencies``
 */
const vue = [
  ...vuePlugin.configs['flat/recommended'],
  {
    name: 'AdonisJS Vue app overrides',
    files: ['resources/js/**/*.{ts,vue}', 'inertia/**/*.{ts,vue}'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      ...RULES_LIST,
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/multi-word-component-names': 'off',
    },
  },
]

export { vue }
