const s = (p55) => {

  // global variables to be used in this instance
  let canvasW = 400;
  let canvasH = 400;

  p55.preload = () => {
    // load any fonts, images, etc.
  };

  p55.setup = () => {
    p55.createCanvas(canvasW, canvasH);
  };

  p55.draw = () => {
    background(125);
  };
};

let myp5 = new p5(s);