/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
