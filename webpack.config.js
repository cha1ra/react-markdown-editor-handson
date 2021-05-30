const path = require('path')

module.exports = {
  // 最初に読み込むファイルの指定
  // ここに指定されたファイルから別ファイルを読み込む指定があると
  // そこも読み取って1つにまとめて出力する
  entry: './src/index.js',
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
