### styled-reset

🐾 Modern and completely opinated css reset for using it on styled-components

## Installation

```
yarn add @nobuti/styled-reset
```

## Usage

This project declares styled-components as peer dependency, so you will need to install it in your project.

```
import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* include your own reset or globals */
`

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>Hello world</div>
  </React.Fragment>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```