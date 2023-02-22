import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildScssLoader } from './loaders/buildScssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        // plugins: [
        //   [
        //     'i18next-extract',
        //     {
        //       locales: ['en', 'ru'],
        //       keyAsDefaultValue: true,
        //     },
        //   ],
        // ],
      },
    },
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const scssLoader = buildScssLoader(options.isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [fileLoader, buildSvgLoader, babelLoader, typescriptLoader, scssLoader]
}
