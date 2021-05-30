## Description
techpit react * typescript handson
cf. https://www.techpit.jp/courses/111/

## Tutorial

### Webpack & TypeScript のセットアップ

```shell script
npm install webpack@5 webpack-cli@4
npm i typescript@4
```

`tsconfig.json` の意味

```javascript
{
  "compilerOptions": {
    "moduleResolution": "node", // モジュールの解解決方法
    "outDir": "./dist/", // 出力先のディレクトリパス
    "target": "ES2015" // 出力対象となるJavaScriptバージョン
  }
}
```
cf. tsconfig.json の関する公式記事  
https://www.typescriptlang.org/tsconfig  
  
webpackに適用させる

```shell script
npm i ts-loader@9
```

