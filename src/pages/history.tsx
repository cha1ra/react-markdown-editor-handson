import * as React from 'react'
// history オブジェクトを返す
// ブラウザ履歴を扱うAPIを提供
import {useHistory} from 'react-router-dom'
import {Button} from "../components/button";

export const History: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>History</h1>
            {/* history.push('遷移先') */}
            <Button onClick={() => history.push('/editor')}>
                エディタへ戻る
            </Button>
        </>
    )
}
