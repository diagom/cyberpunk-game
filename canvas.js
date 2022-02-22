console.log('[dev]d');

const sprites = new Image();
const sprites2 = new Image();
sprites.src = './SPRITES/background/skyline-b.png';
sprites2.src = './SPRITES/background/skyline-a.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

function loop() {
  requestAnimationFrame(loop)
}

loop()
