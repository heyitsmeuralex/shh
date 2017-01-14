/*
function findIntersection(line, segment) {
  // Line
  let l_px = line[0].x
  let l_py = line[0].y
  let l_dx = line[1].x - line[0].x
  let l_dy = line[1].y - line[0].y

  // Segment (part of a wall)
  let s_px = segment[0].x
  let s_py = segment[0].y
  let s_dx = segment[1].x - segment[0].x
  let s_dy = segment[1].x - segment[0].y

  // Are they parallel?
  let l_mag = Math.sqrt(l_dx * l_dx + l_dy * l_dy)
  let s_mag = Math.sqrt(s_dx * s_dx + s_dy * s_dy)
  if (l_dx / l_mag === s_dx / s_mag && l_dy / l_mag === s_dy / s_mag) {
    // If so, there is no intersect
    return false
  }

  // wat
  let t2 = (l_dx * (s_py - l_py) + l_dy * (l_px - s_px)) / (s_dx * l_dy - s_dy * l_dx)
  let t1 = (s_px + s_dx * t2 - l_px) / l_dx

  if (t1 < 0) return false
  if (t2 < 0 || t2 > 1) return false

  // Return the point of intersection
  console.log(s_dx, (s_dx * l_dy - s_dy * l_dx))
  return {
    x: l_px + l_dx * t1,
    y: l_py + l_dy * t1,
    param: t1,
  }
}
*/

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

    /*
    console.log(findIntersection([
      { x: 200, y: 200 },
      { x: 0, y: 0 },
    ], [
      { x: 24, y: 24 },
      { x: 624, y: 24 },
    ]))
    */
   
   this.xv = 0
   this.yv = 0
  }

  update({ kd }) {
    if (kd.W.isDown())
      this.yv -= 5

    if (kd.A.isDown())
      this.xv -= 5

    if (kd.S.isDown())
      this.yv += 5

    if (kd.D.isDown())
      this.xv += 5

    this.xv = Math.max(-25, Math.min(25, this.xv * 0.7))
    this.yv = Math.max(-25, Math.min(25, this.yv * 0.7))
    console.log(this.xv, this.yv)

    // Rotate based on current velocity
    this.rotation += (this.xv + this.yv) / 200

    this.x += this.xv
    this.y += this.yv

    // Rotate towards mouse
    //let targetRotation = Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
    //this.rotation += (targetRotation - this.rotation) / 5
  }
}