import p5 from 'p5'

window['p5'] = p5

export default function sketch(p) {
  let state = {boids: [], numBoids: 1, width: 600, height: 400, paused: false};

  p.setup = () => {
    p.createCanvas(state.width, state.height)
  }

  p.myCustomRedrawAccordingToNewPropsHandler = props => {
    state = props.state || state
  }

  p.draw = () => {
    if (state.paused) return

    p.background(51);
    // Run all the boids
    for (let i = 0; i < state.boids.length; i++) {
      state.boids[i].run(state.boids, p);
    }
  }
}