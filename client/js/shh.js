const PIXI = require('pixi.js')

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

// Add canvas to document body & apply some styles
document.body.style.margin = 0
document.body.style.padding = 0
document.body.appendChild(renderer.view)

let stage = new PIXI.Container()
renderer.render(stage)