import * as React from 'react'
import styled from 'styled-components'
import {useStateWithStorage} from "../hooks/use_state_with_storage"
import * as ReactMarkdown from "react-markdown"
import {putMemo} from "../indexeddb/memo";
import {Button} from "../components/button";
import {SaveModal} from "../components/save_modal";
import {Link} from "react-router-dom";
import {Header} from '../components/header'

const {useState} = React

// styled.(HTMLタグ名) でタグを指定、その後 `` 内に CSS を記述する
const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

const HeaderArea = styled.div`
    position: fixed;
    right: 0;
    top: 3rem;
    top: 0;
    left: 0;
  `

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`

// 今回は ファイルパス:値の名前 という命名規則でキーを定義
const StorageKey = 'pages/editor:text'

interface Props {
    text: string
    setText: (text: string) => void
}


// Editor 変数は React.FC 型である と定義
// FC は Functional Component の略
export const Editor: React.FC<Props> = (props) => {
    const {text, setText} = props
    // ReactHookの書き方
    // const [値, 値をセットする関数] = useState<扱う状態の型>(初期値)
    // <sting> ... TypeScriptのジェネリクス(総称型)という型定義の方法
    //   - 値, 初期値 は string型である必要がある
    //   - 値をセットする関数の引数は string 型である必要がある
    // 注意点: if文など、ネストされた関数内で呼び出すのはNG
    // const [text, setText] = useState<string>(localStorage.getItem(StorageKey) || '')
    // const [text, setText] = useStateWithStorage('', StorageKey)


    const [showModal, setShowModal] = useState(false)

    // <> は <React.Fragment> の短縮系 実際には描画されないタグ
    // Reactのコンポーネントは１要素をreturnしなければならない都合上、このような書き方が用いられる
    // <div> タグで囲ってもいいけど、無駄な要素が増えてしまうからあんまやらない
    return (
        <>
            <HeaderArea>
                <Header title="Markdown Editor">
                    <Button onClick={() => setShowModal(true)}>
                        保存する
                    </Button>
                    <Link to="/history">
                        履歴を見る
                    </Link>
                </Header>
            </HeaderArea>
            <Wrapper>
                <TextArea
                    onChange={event => setText(event.target.value)}
                    value={text}
                />
                <Preview>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </Preview>
            </Wrapper>
            {showModal && (
                <SaveModal
                    onSave={(title: string): void => {
                        putMemo(title, text)
                        setShowModal(false)
                    }}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </>
    )
}
