const path = require('path')

module.exports = {
  // 最初に読み込むファイルの指定
  // ここに指定されたファイルから別ファイルを読み込む指定があると
  // そこも読み取って1つにまとめて出力する
  entry: './src/index.tsx',
  module: {
    // webpackに対してビルド時に追加で行う処理の記述
    rules: [
      {
        // .ts or .tsx で終わるファイルに対して
        // x? で x があってもなくても って意味になる
        test: /\.tsx?$/,
        // ts-loader を実行する
        use: 'ts-loader',
        // 除外するファイルを正規表現で指定
        exclude: /node_modules/,
      },
    ],
  },
  // モジュールとして解決するファイルの拡張子を指定する
  // node_modules には .jsもあるから下記のように指定する必要あり
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  // 出力ファイルの設定
  output: {
    // dist ディレクトリに対して
    path: path.resolve(__dirname, 'dist'),
    // index.js で出力する
    filename: 'index.js',
    // 相対パスにも dist/を追加してくれる 的な認識
    publicPath: 'dist/',
  }
}
