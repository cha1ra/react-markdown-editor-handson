import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
// 作成したエディタ画面のインポート
import {Editor} from './pages/editor'
import {History} from "./pages/history";
import {useStateWithStorage} from "./hooks/use_state_with_storage";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import set = Reflect.set;


// ページ全体に適用できるスタイルを定義
const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`

const StorageKey = '/editor:text'

const Main: React.FC = () => {
    const [text, setText] = useStateWithStorage('', StorageKey)
    return (
        <>
            <GlobalStyle />
            {/* router の外に配置した要素はルーティング対象にならない */}
            <Router>
                {/* exact をつけると完全一致, つけないと部分一致で判定する */}
                <Route exact path="/editor">
                    <Editor
                        text={text}
                        setText={setText}
                    />
                </Route>
                <Route exact path="/history">
                    <History
                        setText={setText}
                    />
                </Route>
                {/* 定義されていないパスにアクセスがあったらリダイレクトする */}
                <Redirect to="/editor" path="*" />
            </Router>
        </>
    )
}

render(<Main />, document.getElementById('app'))
