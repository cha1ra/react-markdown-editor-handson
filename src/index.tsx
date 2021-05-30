import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'


// styled.(HTMLタグ名) でタグを指定、その後 `` 内に CSS を記述する
const Header = styled.h1`
    color: red;
  `

// JSXの記述をしている
const Main = (<Header>Markdown Editor + Webpack Server</Header>)

render(Main, document.getElementById('app'))
