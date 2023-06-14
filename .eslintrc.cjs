/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/max-attributes-per-line': ['error', { multiline: { max: 1 } }],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': ['error', { ignore: ['^virtual:'] }],
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vue/max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      ignorePattern: 'import\\s.+\\sfrom\\s.+;$',
    }],
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true,
      },
    }],
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: '*', next: ['return', 'if', 'try', 'for'] },
      { blankLine: 'always', prev: ['if', 'case', 'default'], next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
    // allow require and extraneous deps in root config js files
    {
      files: ['./*.config.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
