import * as U from 'karet.util'
import * as R from 'ramda'
import * as L from 'partial.lenses'
import K from 'kefir.combines'
import Boid from '../sketches/boids/Boid'

export const atom = U.atom({numBoids: 35, boids: [], width: 600, height: 400, paused: false})

atom.view('numBoids').observe(numBoids => {
   // If we just do modify directly here the atom will emit in the wrong order =\
   // This setTimeout hack fixes it in a way but there's probably a more idiomatic way to do it
   setTimeout(() => atom.view('boids').modify(boids => {
     let diff = numBoids - boids.length;
     if (diff === 0) return boids
     if (diff > 0) return boids.concat(R.map(() => new Boid(Math.random() * 600, 
                                                            Math.random() * 400), 
                                             R.range(0, diff)))
     if (diff < 0) return boids.slice(0, numBoids)
   }))
})

Object.assign(window, {U, K, R, L, atom})
