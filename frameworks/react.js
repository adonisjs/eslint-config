import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import { RULES_LIST } from '../index.js'

const INCLUDED_FILES = ['resources/js/**/*.{ts,tsx}', 'inertia/**/*.{ts,tsx}']

/**
 * React-specific ESLint config block. Make sure you have added [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) to your ``devDependencies``
 */
const react = [
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs.flat.recommended,
  {
    name: 'AdonisJS React app overrides',
    settings: {
      react: { version: '19.0' },
    },
    rules: {
      ...RULES_LIST,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/self-closing-comp': 'error',
      'react/no-children-prop': 'off',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
].map((config) => ({ ...config, files: INCLUDED_FILES }))

export { react }
