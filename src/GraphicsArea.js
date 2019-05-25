import * as React from 'karet'
import * as U from 'karet.util'
import K from 'kefir.combines'
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketches/boids/boids'

const GraphicsArea = ({ state }) => (
  <div>
    {K(state, (st) => (<P5Wrapper sketch={sketch} state={st} />))}
  </div>
)

export default GraphicsArea