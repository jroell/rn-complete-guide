module.exports = {
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'error'
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  }
};
