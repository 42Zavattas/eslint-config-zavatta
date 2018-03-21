module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    Promise: false,
  },
  rules: {
    'accessor-pairs': 2,
    'consistent-return': 0,
    'max-depth': 2,
    'array-callback-return': 2,
    'id-blacklist': 0,
    'max-statements': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-empty-function': 2,
    'no-extra-boolean-cast': 2,
    'no-implicit-coercion': [2, { 'allow': ['!!', '~'] } ],
    'arrow-body-style': 0,
    'max-lines': 0,
    'no-bitwise': 0,
    'no-duplicate-imports': 2,
    'no-extra-label': 2,
    'no-inner-declarations': 2,
    'no-new-symbol': 2,
    'no-restricted-globals': 0,
    'dot-location': [2, 'property'],
    'max-len': 0,
    'max-statements-per-line': [2, { 'max': 2 }],
    'newline-before-return': 0,
    'no-case-declarations': 2,
    'no-control-regex': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-extra-parens': 0,
    'no-implicit-globals': 2,
    'no-magic-numbers': 0,
    'no-mixed-operators': 2,
    'no-plusplus': 0,
    'comma-dangle': [2, 'always-multiline'],
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
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'no-unexpected-multiline': 2,
    'block-scoped-var': 2,
    'complexity': 0,
    'curly': 2,
    'default-case': 2,
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 0,
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
    'no-return-assign': 0,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 0,
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
    'strict': [2, 'never'],
    'init-declarations': [0, 'never'],
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 0,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 0,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'callback-return': 2,
    'global-require': 0,
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
    'id-length': [2, { 'min': 1, 'max': 25 }],
    'id-match': 0,
    'indent': [2, 2],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'lines-around-comment': 0,
    'linebreak-style': [2, 'unix'],
    'max-nested-callbacks': [2, 3],
    'new-cap': 0,
    'new-parens': 2,
    'newline-after-var': 0,
    'no-array-constructor': 2,
    'no-continue': 0,
    'no-inline-comments': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-tabs': 2,
    'multiline-ternary': 0,
    'no-multiple-empty-lines': [2, { 'max': 1 }],
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
    'semi-spacing': [2, { 'before': false, 'after': true }],
    'semi': [2, 'never'],
    'sort-vars': 0,
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'spaced-comment': [2, 'always'],
    'wrap-regex': 2,
    'arrow-parens': 0,
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
    'max-params': [2, 5],
    'no-prototype-builtins': 0,
    'no-restricted-imports': 0,
    'no-self-assign': 2,
    'no-unmodified-loop-condition': 0,
    'no-unsafe-finally': 2,
    'no-unused-labels': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': 2,
    'no-whitespace-before-property': 2,
    'object-curly-newline': 0,
    'object-property-newline': [2, { 'allowMultiplePropertiesPerLine': true }],
    'one-var-declaration-per-line': 2,
    'prefer-rest-params': 2,
    'rest-spread-spacing': 2,
    'sort-imports': 0,
    'template-curly-spacing': 2,
    'unicode-bom': 2,
    'yield-star-spacing': [2, 'after'],
    'capitalized-comments': 0,
    'func-call-spacing': [2, 'never'],
    'line-comment-position': 0,
    'no-await-in-loop': 0,
    'no-global-assign': 2,
    'no-restricted-properties': 0,
    'no-template-curly-in-string': 0,
    'class-methods-use-this': 0,
    'lines-around-directive': 0,
    'no-multi-assign': 2,
    'no-unsafe-negation': 2,
    'nonblock-statement-body-position': 0,
    'prefer-numeric-literals': 0,
    'require-await': 2,
    'symbol-description': 0,
    'func-name-matching': 0,
    'no-compare-neg-zero': 2,
    'no-useless-return': 2,
    'prefer-promise-reject-errors': 0,
    'template-tag-spacing': [2, 'never'],
    'no-return-await': 2,
    'prefer-destructuring': 0,
    'sort-keys': 0,
  }
}
