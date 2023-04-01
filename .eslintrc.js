module.exports = {
  extends: [require.resolve('@3846masa/configs/eslint')],
  overrides: [
    {
      files: ['examples/**/*'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['ava', 'axios-cookiejar-support'],
          },
        ],
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                group: 'external',
                pattern: 'axios-cookiejar-support',
              },
            ],
          },
        ],
      },
    },
  ],
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['ava'],
      },
    ],
  },
};
