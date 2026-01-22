/*
 * @adonisjs/eslint-config
 *
 * (c) AdonisJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import tseslint from 'typescript-eslint'
import unicorn from 'eslint-plugin-unicorn'
import stylistic from '@stylistic/eslint-plugin'
import adonisJSPlugin from '@adonisjs/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/**
 * Default list of files to include
 */
export const INCLUDE_LIST = ['**/*.ts']

/**
 * List of files that must be ignored globally
 */
export const GLOBAL_IGNORE_LIST = [
  'eslint.config.js',
  'eslint.config.ts',
  '*.min.*',
  '*.d.ts',
  'CHANGELOG.md',
  'dist/**',
  'LICENSE*',
  'output/**',
  'coverage/**',
  'temp/**',
  'build/**',
  '.yalc/**',
  'pnpm-lock.yaml',
  'yarn.lock',
  'package-lock.json',
]

/**
 * Default set of files to ignore
 */
export const ADONIS_IGNORE_LIST = [
  'public/assets/**',
  '__snapshots__/**',
  'resources/**',
  '.adonisjs/**',
]

/**
 * Default set of plugins to apply to the config
 */
export const PLUGINS_LIST = {
  '@unicorn': unicorn,
  '@stylistic': stylistic,
  ...eslintPluginPrettierRecommended.plugins,
}

/**
 * Default list of rules to apply
 */
export const RULES_LIST = {
  'curly': ['error', 'all'],
  'eqeqeq': ['error', 'always'],
  'handle-callback-err': ['error', '^(err|error)$'],
  'no-array-constructor': ['error'],
  'no-caller': ['error'],
  'no-cond-assign': ['error', 'except-parens'],
  'no-constant-condition': ['error'],
  'no-control-regex': ['error'],
  'no-debugger': ['error'],
  'no-duplicate-case': ['error'],
  'no-eval': ['error'],
  'no-ex-assign': ['error'],
  'no-extra-boolean-cast': ['error'],
  'no-fallthrough': ['error'],
  'no-inner-declarations': ['error'],
  'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],
  'no-irregular-whitespace': ['error'],
  'no-new-wrappers': ['error'],
  'no-proto': ['error'],
  'no-regex-spaces': ['error'],
  'no-self-assign': ['error'],
  'no-self-compare': ['error'],
  'no-shadow': ['off'],
  'no-sparse-arrays': ['error'],
  'no-this-before-super': ['error'],
  'no-undef-init': ['error'],
  'no-unreachable': ['error'],
  'no-unsafe-finally': ['error'],
  'no-unsafe-negation': ['error'],
  'no-with': ['error'],
  'one-var': ['error', 'never'],
  'use-isnan': ['error'],
  'valid-typeof': ['error', { requireStringLiterals: true }],

  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/indent': 'off',
  '@stylistic/max-len': ['error', { code: 100, comments: 120, ignoreUrls: true, ignoreTemplateLiterals: true },],
  '@stylistic/new-parens': ['error', 'always'],
  '@stylistic/no-mixed-spaces-and-tabs': ['error'],
  '@stylistic/no-multi-spaces': ['error'],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
  '@stylistic/no-trailing-spaces': ['error', { ignoreComments: true }],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/quotes': 'off',
  '@stylistic/rest-spread-spacing': ['error', 'never'],
  '@stylistic/space-before-function-paren': 'off',
  '@stylistic/space-in-parens': ['error', 'never'],

  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      fixStyle: 'inline-type-imports',
      disallowTypeAnnotations: false,
    },
  ],
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
    { selector: 'typeLike', format: ['PascalCase'] },
    { selector: 'class', format: ['PascalCase'] },
    { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
  ],

  '@unicorn/prefer-module': 'error',
  '@unicorn/prefer-node-protocol': 'error',
  '@unicorn/filename-case': ['error', { case: 'snakeCase' }],
  '@unicorn/no-await-expression-member': 'error',
  '@unicorn/no-for-loop': 'error',
  '@unicorn/no-instanceof-builtins': 'error',
  '@unicorn/prefer-number-properties': 'error',
  ...eslintPluginPrettierRecommended.rules,
  'prettier/prettier': ['error', { endOfLine: 'auto' }],
}

/**
 * Configures ESLint to use an opinionated config tailored for
 * creating a TypeScript library.
 *
 * You may pass additional config blocks as multiple
 * arguments to this function.
 *
 * @example
 * ```js
 * configPkg()
 *
 * configPkg({
 *   files: INCLUDE_LIST,
 *   ignore: IGNORE_LIST,
 *   rules: {
 *   }
 * })
 * ```
 */
export function configPkg(...configBlocksToMerge) {
  return tseslint.config(
    { ignores: GLOBAL_IGNORE_LIST },
    tseslint.configs.base,
    { name: 'Plugins list', plugins: PLUGINS_LIST },
    {
      name: 'AdonisJS pkg defaults',
      files: INCLUDE_LIST,
      ignores: ADONIS_IGNORE_LIST,
      rules: RULES_LIST,
    },
    ...configBlocksToMerge
  )
}

/**
 * Inertia-specific ESLint config block
 */
const inertiaConfigBlock = {
  name: 'AdonisJS inertia app overrides',
  files: ['inertia/**/*.{ts,tsx}'],
  rules: {
    '@adonisjs/no-backend-import-in-frontend': ['error'],
    '@adonisjs/prefer-adonisjs-inertia-link': ['error'],
    '@adonisjs/prefer-adonisjs-inertia-form': ['error'],
  },
}

/**
 * Check if @adonisjs/inertia is installed
 */
function isInertiaInstalled() {
  try {
    import.meta.resolve('@adonisjs/inertia')
    return true
  } catch {
    return false
  }
}

/**
 * Configures ESLint to use an opinionated config tailored for
 * an AdonisJS application
 *
 * You may pass additional config blocks as multiple
 * arguments to this function.
 *
 * @example
 * ```js
 * configApp()
 *
 * configApp({
 *   files: INCLUDE_LIST,
 *   ignore: IGNORE_LIST,
 *   rules: {
 *   }
 * })
 * ```
 */
export function configApp(...configBlocksToMerge) {
  const inertia = isInertiaInstalled()

  return tseslint.config(
    { ignores: GLOBAL_IGNORE_LIST },
    tseslint.configs.base,
    {
      languageOptions: {
        parserOptions: {
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
        },
      },
    },
    { name: 'Plugins list', plugins: { ...PLUGINS_LIST, '@adonisjs': adonisJSPlugin } },
    {
      name: 'AdonisJS app defaults',
      files: INCLUDE_LIST,
      ignores: ADONIS_IGNORE_LIST,
      rules: {
        ...RULES_LIST,
        '@adonisjs/prefer-lazy-controller-import': ['error'],
        '@adonisjs/prefer-lazy-listener-import': ['error'],
      },
    },
    ...(inertia ? [inertiaConfigBlock] : []),
    ...configBlocksToMerge
  )
}
