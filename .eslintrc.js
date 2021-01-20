module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'rules': {
    'require-await':'error',
    'semi':[2,'always'],
    'no-unreachable':'error',
    'arrow-spacing':['error',{ "before": false, "after": false }],
    'no-unused-vars':'error',
    'no-var':'error',
  },
};