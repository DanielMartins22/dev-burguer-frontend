import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
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
            prettier,
            react,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'react/jsx-key': 'warn',
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        ['^react(?:$|/)'],
                        ['^\\u0000', '^(?!@shared/)(?:@?\\w)'],
                        ['^@shared/'],
                        [
                            '^\\.\\.(?!/?$)',
                            '^\\.\\./?$',
                            '^\\./(?=.*/)(?!/?$)',
                            '^\\.(?!/?$)',
                            '^\\./?$',
                        ],
                    ],
                },
            ],
            'no-unused-vars': 'warn',
            'prettier/prettier': 'error',
        },
    },
];
