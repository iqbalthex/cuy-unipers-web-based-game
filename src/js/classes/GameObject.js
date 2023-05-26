class GameObject {
  create() {
    board.fillStyle = this.color;
    board.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
