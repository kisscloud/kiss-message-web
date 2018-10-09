module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    VERSION: true
  },
  extends: ["standard", "plugin:vue/essential", "plugin:prettier/recommended"],
  rules: {
    'prettier/prettier': 'warn',
    "vue/name-property-casing": 'off',
    'vue/require-v-for-key': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
