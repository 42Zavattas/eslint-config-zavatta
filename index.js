'use strict';

module.exports = {

  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  rules: {
    'comma-dangle': 0,
    'no-cond-assign': [2, 'always'],
    'no-console': 2,
    'no-constant-condition': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': 2,
    'valid-typeof': 2,
    'no-unexpected-multiline': 2,
    'block-scoped-var': 2,
    'complexity': [2, 2],
    'curly': 2,
    'default-case': 2,
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-label': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': 0,
    'no-process-env': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 2,
    'wrap-iife': 2,
    'yoda': 2,
    'strict': [2, 'global'],
    'init-declarations': [0, 'never'],
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 0,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'callback-return': 2,
    'global-require': 2,
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 2,
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'camelcase': [2, { 'properties': 'always' }],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    'func-names': 0,
    'func-style': 0,
    'id-length': [2, { 'min': 1, 'max': 20 }],
    'id-match': 0,
    'indent': [2, 2],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'lines-around-comment': [2, { 'beforeBlockComment': true, 'beforeLineComment': true, 'afterBlockComment': false }],
    'linebreak-style': [2, 'unix'],
    'max-nested-callbacks': [2, 3],
    'new-cap': 2,
    'new-parens': 2,
    'newline-after-var': 0,
    'no-array-constructor': 2,
    'no-continue': 0,
    'no-inline-comments': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': 2,
    'no-nested-ternary': 0,
    'no-negated-condition': 0,
    'no-new-object': 2,
    'no-restricted-syntax': 2,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': 0,
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'before'],
    'padded-blocks': 0,
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single'],
    'require-jsdoc': 0,
    'semi-spacing': [2, { 'before': false, 'after': false }],
    'semi': [2, 'always'],
    'sort-vars': 0,
    'space-after-keywords': [2, 'always'],
    'space-before-keywords': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'spaced-comment': [2, 'always'],
    'wrap-regex': 2,
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'constructor-super': 2,
    'generator-star-spacing': [2, { 'before': true, 'after': false }],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-reflect': 0,
    'prefer-template': 2,
    'require-yield': 2,
    'max-params': [2, 3]
  }

};
