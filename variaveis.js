let nextFloor = 40;
const renderBackground = () => {
  context.drawImage(sprites, 0, 0, 128, 240, 0, 0, 256, 512);
  context.drawImage(sprites2, 0, 0, 128, 240, 256, 0, 256, 512);
  context.drawImage(sprites, 0, 0, 128, 240, 512, 0, 256, 512);
  context.drawImage(sprites, 0, 0, 128, 240, 768, 0, 256, 512);
  context.drawImage(sprites, 0, 0, 128, 240, 768, 0, 256, 512);
};

const renderFloor = () => {
  context.drawImage(floor3, 0, 0, 100, 200, 0, 375, 100, 400);
  middleFloor();
};

const middleFloor = () => {
  if (nextFloor < 300) {
    context.drawImage(floor4, 0, 0, 100, 200, nextFloor, 376, 100, 400);
    nextFloor += 30;
  }
};

const a = {
  largura: 30,
};
