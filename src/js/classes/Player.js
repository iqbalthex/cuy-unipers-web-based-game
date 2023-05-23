class Player extends GameObject {
  constructor({ height, width, speed, color, position: { x, y } }) {
    super();
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.color = color;
    this.position = { x, y };
  }
}