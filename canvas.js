console.log("[dev]d");

const sprites = new Image();
const sprites2 = new Image();
const floor = new Image();
const floor2 = new Image();
const floor3 = new Image();
const floor4 = new Image();
sprites.src = "./SPRITES/background/skyline-a.png";
sprites2.src = "./SPRITES/background/skyline-b.png";
floor.src = "./SPRITES/ENVIRONMENT/floor.png";
floor2.src = "./SPRITES/ENVIRONMENT/floor2.png";
floor3.src = "./SPRITES/ENVIRONMENT/floor3.png";
floor4.src = "./SPRITES/ENVIRONMENT/floor4.png";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function loop() {
  renderBackground();
  renderFloor();

  requestAnimationFrame(loop);
}

loop();
