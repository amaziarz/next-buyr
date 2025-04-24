import { includeIgnoreFile } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import perfectionist from 'eslint-plugin-perfectionist';
import { join } from 'node:path';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  perfectionist.configs['recommended-natural'],
  prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'eslint.config.mjs',
            'postcss.config.mjs',
            '.graphqlrc.ts',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  includeIgnoreFile(join(import.meta.dirname, '.gitignore')),
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
);
