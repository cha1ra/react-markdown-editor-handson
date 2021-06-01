import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
// 作成したエディタ画面のインポート
import {Editor} from './pages/editor'
import {History} from "./pages/history";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'


// ページ全体に適用できるスタイルを定義
const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`

const Main = (
    <>
      <GlobalStyle />
      {/* router の外に配置した要素はルーティング対象にならない */}
      <Router>
          {/* exact をつけると完全一致, つけないと部分一致で判定する */}
          <Route exact path="/editor">
              <Editor />
          </Route>
          <Route exact path="/history">
              <History />
          </Route>
          {/* 定義されていないパスにアクセスがあったらリダイレクトする */}
          <Redirect to="/editor" path="*" />
      </Router>
    </>
)

render(Main, document.getElementById('app'))
