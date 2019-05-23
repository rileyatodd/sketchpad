import * as React from 'karet'
import * as U from 'karet.util'

const App = ({ message = U.atom("Hey"), time = U.atom(null) }) => (
  <div>
    <div>{message}</div>
    <div><button onClick={getDbTime}>Check DB time</button></div>
    <div>db time: {time}</div>
  </div>
)

const getDbTime = () => fetch('http://localhost:3001/time')
  .then(res => res.json())
  .then(({ now }) => window.rootAtom.view('time').set(now))

export default App