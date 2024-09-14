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
import stylistic from '@stylistic/eslint-plugin-ts'
import adonisJSPlugin from '@adonisjs/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/**
 * Default list of files to include
 */
export const INCLUDE_LIST = ['**/*.ts']

/**
 * Default set of files to ignore
 */
export const IGNORE_LIST = [
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
  'dist/**',
  'public/assets/**',
  'pnpm-lock.yaml',
  'yarn.lock',
  'package-lock.json',
  '__snapshots__/**',
  'resources/**',
  '!.github',
  '!.vscode',
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
  'quotes': 'off',
  'indent': 'off',
  'space-before-function-paren': 'off',
  'no-irregular-whitespace': ['error'],
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'one-var': ['error', 'never'],
  'eol-last': ['error', 'always'],
  'no-cond-assign': ['error', 'except-parens'],
  'comma-dangle': ['error', 'always-multiline'],
  'eqeqeq': ['error', 'always'],
  'new-parens': ['error', 'always'],
  'no-caller': ['error'],
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
  'no-proto': ['error'],
  'no-shadow': ['off'],
  'no-regex-spaces': ['error'],
  'no-self-compare': ['error'],
  'no-sparse-arrays': ['error'],
  'no-mixed-spaces-and-tabs': ['error'],
  'no-unsafe-negation': ['error'],
  'no-new-wrappers': ['error'],
  'no-self-assign': ['error'],
  'no-this-before-super': ['error'],
  'no-with': ['error'],
  'rest-spread-spacing': ['error', 'never'],
  'no-trailing-spaces': ['error', { ignoreComments: true }],
  'no-undef-init': ['error'],
  'no-unsafe-finally': ['error'],
  'padded-blocks': ['error', 'never'],
  'space-in-parens': ['error', 'never'],
  'use-isnan': ['error'],
  'valid-typeof': ['error', { requireStringLiterals: true }],
  'brace-style': ['error', '1tbs'],
  'curly': ['error', 'all'],
  'handle-callback-err': ['error', '^(err|error)$'],
  'max-len': [
    'error',
    {
      code: 100,
      comments: 120,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
    },
  ],
  'no-array-constructor': ['error'],
  'no-unreachable': ['error'],
  'no-multi-spaces': ['error'],

  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'class',
      format: ['PascalCase'],
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
  ],

  '@unicorn/prefer-module': 'error',
  '@unicorn/prefer-node-protocol': 'error',
  '@unicorn/filename-case': [
    'error',
    {
      case: 'snakeCase',
    },
  ],
  '@unicorn/no-await-expression-member': 'error',
  '@unicorn/no-for-loop': 'error',
  '@unicorn/no-instanceof-array': 'error',
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
    tseslint.configs.base,
    {
      name: 'Plugins list',
      plugins: PLUGINS_LIST,
    },
    {
      name: 'AdonisJS pkg defaults',
      files: INCLUDE_LIST,
      ignores: IGNORE_LIST,
      rules: RULES_LIST,
    },
    ...configBlocksToMerge
  )
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
  return tseslint.config(
    tseslint.configs.base,
    {
      name: 'Plugins list',
      plugins: {
        ...PLUGINS_LIST,
        '@adonisjs': adonisJSPlugin,
      },
    },
    {
      name: 'AdonisJS app defaults',
      files: INCLUDE_LIST,
      ignores: IGNORE_LIST,
      rules: {
        ...RULES_LIST,
        '@adonisjs/prefer-lazy-controller-import': ['error'],
        '@adonisjs/prefer-lazy-listener-import': ['error'],
      },
    },
    ...configBlocksToMerge
  )
}
