import js from '@eslint/js';
import importHelpers from 'eslint-plugin-import-helpers';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
    {
        ignores: ['dist/**'],
    },
    js.configs.recommended,
    reactHooks.configs.flat.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },
        plugins: {
            'import-helpers': importHelpers,
            prettier,
            react,
        },
        rules: {
            'react/jsx-key': 'warn',
            'import-helpers/order-imports': [
                'warn',
                {
                    newlinesBetween: 'always',
                    groups: [
                        '/^react/',
                        'module',
                        '/^@shared/',
                        ['parent', 'sibling', 'index'],
                    ],
                    alphabetize: {
                        order: 'asc',
                        ignoreCase: true,
                    },
                },
            ],
            'no-unused-vars': 'warn',
            'prettier/prettier': 'error',
        },
    },
];
