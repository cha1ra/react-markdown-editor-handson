import * as React from 'react'
// history オブジェクトを返す
// ブラウザ履歴を扱うAPIを提供
import {
    Link,
    useHistory
} from 'react-router-dom'
import styled from "styled-components";
import {Header} from "../components/header";
import {
    getMemos,
    MemoRecord,
} from "../indexeddb/memo";

const {useState, useEffect} = React

const HeaderArea = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
  `

const Wrapper = styled.div`
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 3rem;
    padding: 0 1rem;
  `

export const History: React.FC = () => {

    const [memos, setMemos] = useState<MemoRecord[]>([])
    console.log(memos)

    // 副作用エフェクト レンダリングの後に実行される
    // useEffect(実行したい関数, 変更を監視する状態の配列)
    // https://ja.reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        getMemos().then(setMemos)
    }, [])

    return (
        <>
            <HeaderArea>
                <Header title="履歴">
                    <Link to="/editor">
                        エディタに戻る
                    </Link>
                </Header>
            </HeaderArea>
            <Wrapper>
                TODO: 履歴を表示
            </Wrapper>
        </>
    )
}
