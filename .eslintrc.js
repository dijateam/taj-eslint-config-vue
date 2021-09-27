module.exports = {
    extends: '@dijateam/eslint-config-taj',
    parserOptions: {
        extraFileExtensions: ['.vue'],
    },
    overrides: [
        {
            files: ['**/*.vue'],
            env: { browser: true, es6: true, node: true },
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
                allowImportExportEverywhere: false,
                ecmaVersion: 2020,
            },
            extends: [
                'plugin:vue/vue3-recommended',
                'plugin:vue/vue3-essential',
                'plugin:vue/vue3-strongly-recommended',
            ],
            rules: {
                'prettier/prettier': 'off',
                'vue/no-v-html': 'off',
                'vue/component-name-in-template-casing': [
                    'error',
                    'kebab-case',
                    {
                        ignores: [],
                    },
                ],
                'vue/max-attributes-per-line': [
                    'warn',
                    {
                        singleline: {
                            max: 1,
                            allowFirstLine: true,
                        },
                        multiline: {
                            max: 1,
                            allowFirstLine: false,
                        },
                    },
                ],
                'vue/html-closing-bracket-newline': [
                    'warn',
                    {
                        singleline: 'never',
                        multiline: 'never',
                    },
                ],
                'vue/html-self-closing': [
                    'warn',
                    {
                        html: {
                            void: 'always',
                            normal: 'always',
                            component: 'always',
                        },
                        svg: 'always',
                        math: 'always',
                    },
                ],
            },
        },
        {
            files: ['**/*.tsx'],
            parserOptions: {
                allowImportExportEverywhere: false,
                ecmaVersion: 2020,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    ],
};
