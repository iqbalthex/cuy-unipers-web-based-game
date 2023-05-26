const canvas = document.querySelector("canvas");
const board  = canvas.getContext("2d");

canvas.width  = DISPLAY_PIXEL.width  * ASPECT_RATIO.width;
canvas.height = DISPLAY_PIXEL.height * ASPECT_RATIO.height;

const playerProperty = {
  width: 100,
  height: 100,
  speed: 10,
  color: "tomato",
  position: {
    x: 200,
    y: 150,
  },
};

const enemyProperty = {
  width: 100,
  height: 100,
  speed: 1,
  color: "black",
  position: {
    x: 300,
    y: 250,
  },
};

const ground = new Ground(canvas.width, canvas.height, "lightblue");
const player = new Player(playerProperty);
const enemy  = new Player(enemyProperty);


function animate() {
  ground.create();
  player.create();
  enemy.create();

  player.update();

  window.requestAnimationFrame(animate);
}

window.addEventListener("keydown", function (event) {
  player.move(event.key);
});

animate();
