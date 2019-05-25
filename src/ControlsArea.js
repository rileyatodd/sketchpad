import * as React from 'karet'
import * as U from 'karet.util'
import K from 'kefir.combines'

const ControlsArea = ({ state = U.atom({numBoids: 1, paused: false}) }) => (
  <div>
    <div className="control">
      <label htmlFor="val">Number of Boids: {state.view('numBoids')}</label>
      <input type="range" name="val" onChange={e => state.view('numBoids').set(Number(e.target.value))} />
    </div>
    <button onClick={() => state.view('paused').modify(x => !x)}>
      {K(state.view('paused'), paused => paused ? '\u25B6' : '\u23F8')}
    </button>
  </div>

)

export default ControlsArea