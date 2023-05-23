class Ground extends GameObject {
  constructor(width, height, color) {
    super();
    this.width  = width;
    this.height = height;
    this.color  = color;
    this.position = { x: 0, y: 0 };
  }
}