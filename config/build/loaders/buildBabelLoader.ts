export const buildBabelLoader = (isDev: boolean) => ({
  test: /\.(js|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        isDev && require.resolve('react-refresh/babel'),
        // [
        //   'i18next-extract',
        //   {
        //     locales: ['en', 'ru'],
        //     keyAsDefaultValue: true,
        //   },
        // ],
      ].filter(Boolean),
    },
  },
})
