## Description
techpit react * typescript handson
cf. https://www.techpit.jp/courses/111/

## 事前準備

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

### React のセットアップ

```shell script
npm i react@17 react-dom@17 @types/react@17 @types/react-dom@17
```
- react ... React本体
- react-dom ... Reactをブラウザで使うためのライブラリ
- @types/react ... Reactの型定義
- @typpes/react-dom ... react-domの型定義

cf. typescript で jsxを使いたい場合  
https://www.typescriptlang.org/docs/handbook/jsx.html#basic-usage  
  
### Webpack Dev Server のセットアップ

```shell script
npm i webpack-dev-server@3
```

### styled-components 導入

```shell script
npm i styled-components@5 @types/styled-components@5
```

## React を触ってみる

### Reactの特徴
1. 宣言的なView
2. コンポーネントベース
3. 一度学習すればどこでも使える

宣言的なViewとは？
- 手続き方Viewの宣言方法の解決案として登場
- そもそも: VanillaJSやjQueryのような宣言方法は "手続き型" と呼ばれる
  - 問題点: 見た目(HTML)と動作(JS)のコードが分離している→何をしたらどう変更されるのかがわかりづらい
  - 宣言的ViewではHTMLの中にJSが書かれているので、見た目と動作を一つかみに把握することができる
- 手続き型Viewでも同様の挙動は実現できるっちゃできるが、変更があるたびにDOMを毎回作り直すことになっちゃう
- そこらへん、Reactでは仮想DOMを作って差分検知を実施。差分だけの更新を行う仕組みを作っている

## IndexedDBを使ってみる

- https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB
- https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria#storage_limits
  
IndexedDBをラップしたライブラリを使うと扱いやすい。今回はDexieを使用
- https://dexie.org/

今回は以下のオブジェクトストアを作成
- ストア名: `memos`
- 保存するデータ
  - `datetime`
  - `title`
  - `text`


