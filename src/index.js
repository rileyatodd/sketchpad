import * as React from 'karet'
import * as U from 'karet.util'
import * as L from 'partial.lenses'
import * as R from 'ramda'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'

const rootAtom = U.atom({message: "Hello world"})
Object.assign(window, {rootAtom, U, L, R})

const { message, time } = U.destructure(rootAtom)

function renderRoot() {
  ReactDOM.render(<App {...{message, time}} />,
                  document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./App', renderRoot)
}

renderRoot()
