import * as React from 'karet'
import * as U from 'karet.util'
import K from 'kefir.combines'
import * as R from 'ramda'
import * as L from 'partial.lenses'

import GraphicsArea from './GraphicsArea.js'
import ControlsArea from './ControlsArea.js'

import {atom} from './state'

const App = ({ state = atom }) => (
  <div>
    <h1>Hello</h1>
    <GraphicsArea {...{state}}/>
    <ControlsArea  {...{state}}/>
  </div>
)

export default App