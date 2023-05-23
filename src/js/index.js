const canvas = document.querySelector("canvas");
const board  = canvas.getContext("2d");

width  = DISPLAY_PIXEL.width  * ASPECT_RATIO.width;
height = DISPLAY_PIXEL.height * ASPECT_RATIO.height;

const ground = new Ground(width, height, "red");
ground.create();
