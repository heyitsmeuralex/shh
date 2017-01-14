const PIXI = require('pixi.js')
const Player = require('./objects/Player')

let renderer = new PIXI.WebGLRenderer(256, 256, {
  roundPixels: true,
  antialias: true,
})

// Pretty background colour
renderer.backgroundColor = 0x111929

// Upscale renderer to size of browser window
renderer.autoResize = true
renderer.view.style.position = 'absolute'
renderer.view.style.display = 'block'
renderer.resize(window.innerWidth, window.innerHeight)

// Automagically resize to browser window size
window.addEventListener('resize', () =>
  renderer.resize(window.innerWidth, window.innerHeight))

// Add canvas to document body & apply some styles
document.body.style.margin = 0
document.body.style.padding = 0
document.body.appendChild(renderer.view)

// Where every sprite lives: the stage
let stage = new PIXI.Container()
let objects = []

// Create the player
let player = new Player()
stage.addChild(player)
objects.push(player)

// Render loop
window.requestAnimationFrame(function render(timestamp) {
  for (let object of objects) {
    object.update()
  }

  renderer.render(stage)
  window.requestAnimationFrame(render)
})