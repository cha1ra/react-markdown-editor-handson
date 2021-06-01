import * as React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;
`

// コンポーネントに渡すパラメータの型定義
interface Props {
    // ボタン内に表示するテキスト
    children: string
    // ボタンをクリックした場合の処理関数
    onClick: () => void
}

export const Button: React.FC<Props> = (props) => (
    <StyledButton onClick={props.onClick}>
        {props.children}
    </StyledButton>
)
