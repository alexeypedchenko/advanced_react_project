import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildScssLoader } from './loaders/buildScssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = buildBabelLoader(isDev)

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const scssLoader = buildScssLoader(isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [fileLoader, buildSvgLoader, babelLoader, typescriptLoader, scssLoader]
}
