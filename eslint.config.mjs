import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const sharedRules = {
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
};

const sharedPlugins = {
  'simple-import-sort': simpleImportSort,
  'unused-imports': unusedImports,
};

export default [
  {
    ignores: [
      'dist/**',
      '.astro/**',
      '.claude/**',
      'node_modules/**',
      '.output/**',
      'public/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      ...sharedPlugins,
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...sharedRules,
    },
  },
  {
    files: ['**/*.astro'],
    plugins: sharedPlugins,
    rules: sharedRules,
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: sharedPlugins,
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];
