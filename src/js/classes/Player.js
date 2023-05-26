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
    this.velocity = { x: 1, y: 1 };
    this.jumpPower = 100;
    this.gravity = 0.5;
  }

  create() {
    board.fillStyle = this.color;
    board.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // kinematic physic equation
  // h = vi^2 / (2 * g)
  // vi = sqrt(2 * g * h)

  move(direction) {
    switch (direction) {
      case "ArrowUp":
        this.velocity.y = -(Math.sqrt(2 * this.gravity * this.jumpPower));
        break;
      case "ArrowLeft":
        this.velocity.x = -1 * this.speed;
        break;
      case "ArrowRight":
        this.velocity.x = 1 * this.speed;
    }
  }

  update() {
    const ground = canvas.height - this.height;

    this.velocity.y += this.gravity;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y > ground) {
      this.position.y = ground;
    }
  }
}