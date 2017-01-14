module.exports = class Player extends PIXI.Graphics {
  constructor(...args) {
    super(...args)

    // Draw rounded rectangle w/ cyan stroke
    this.lineStyle(10, 0x00ffff)
    this.drawRoundedRect(0, 0, 60, 60, 25)

    // Rotate from the centre of the sprite
    this.pivot.x = this.width / 2
    this.pivot.y = this.height / 2

    this.mouse = { x: 0, y: 0 }
    window.addEventListener('mousemove', evt => {
      this.mouse.x = evt.clientX
      this.mouse.y = evt.clientY
    })
  }

  update() {
    this.x++
    this.y++

    //this.clear()

    // Rotate towards mouse
    let targetRotation = Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
    this.rotation += (targetRotation - this.rotation) / 5
  }
}