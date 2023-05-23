class Player {
  constructor(props) {
    this.height = props.height;
    this.width = props.width;
    this.speed = props.speed;
    this.color = props.color;
    this.position = {
      x: props.position.x,
      y: props.position.y,
    };
  }

  create() {
    board.fillStyle = this.color;
    board.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}