module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', 'testing-library', 'jest-dom'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/recommended',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  /*      0 = off     1 = warn        2 = MainPage     */
  /**
   * Set up hot keys for EsLint:
   * https://stackoverflow.com/questions/41735890/how-to-make-webstorm-format-code-according-to-eslint
   * */
  rules: {
    'no-console': 0, // Allows calls to methods of the console object.
    'react/prop-types': 0, // Disabled checking of prop-types
    'react/jsx-key': 1, // Always warn on missing jsx-key inside iterator functions
    'react/jsx-curly-brace-presence': [
      1,
      { props: 'never', children: 'ignore' },
    ],
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['__tests__/**/*.ts', '__tests__/**/*.tsx', 'src/**/*.ts', 'src/**/*.tsx'],
      env: { 'browser': true, 'es6': true, 'node': true },
      parser: '@typescript-eslint/parser',
      plugins: ['react', 'react-hooks', '@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
        'arrow-body-style': ['error', 'as-needed'],
        'no-console': 0, // Allows calls to methods of the console object.
        "no-irregular-whitespace": 0, // Disallow irregular whitespace outside of strings and comments
        'react/prop-types': 0, // Disabled checking of prop-types
        'react/jsx-key': 1, // Always warn on missing jsx-key inside iterator functions
        'react/jsx-curly-brace-presence': [
          1,
          { props: 'never', children: 'ignore' },
        ],
        'prettier/prettier': 'error',
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'react-hooks/rules-of-hooks': 'error',
        'curly': ['error', 'all'],
      },
      settings: {
        react: {
          version: 'detect',
        }
      },
    },
  ],
};
