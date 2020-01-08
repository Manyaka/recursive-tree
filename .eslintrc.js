module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    // override default options for rules from base configurations
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    // disable rules from base configurations
    indent: ['off', 2],
    'spaced-comment': 'off',
    'prefer-const': 'off',
    'template-curly-spacing': 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'warn',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    //vue
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'any',
          component: 'always'
        }
      }
    ],
    'vue/v-bind-style': ['warn', 'longform'],
    'vue/v-on-style': ['warn', 'longform'],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 3,
        multiline: {
          max: 3,
          allowFirstLine: true
        }
      }
    ],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'warn',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'warn',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
        allowEmptyLines: true
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/return-in-computed-property': ['warn']
  }
};
