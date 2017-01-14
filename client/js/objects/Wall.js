module.exports = class Wall extends PIXI.Graphics {
  constructor(x, y, width, height, ...args) {
    super(...args)

    // Draw rectangle w/ white fill
    this.beginFill(0xffffff)
    this.drawRect(x, y, width, height)
    this.endFill()
  }
}