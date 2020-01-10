module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ['react-app', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    semi: ['error', 'always'],
    camelcase: 'off',
    eqeqeq: 'off',
    'no-trailing-spaces': [
      'warn',
      { skipBlankLines: true, ignoreComments: true }
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],
    'func-names': 'off',
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: 'React', caughtErrors: 'none', args: 'after-used' }
    ]
  }
};
