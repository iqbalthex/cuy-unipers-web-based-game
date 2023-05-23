const canvas = document.querySelector("canvas");
const board  = canvas.getContext("2d");

const ground = new Ground(groundConfig);
ground.create();
