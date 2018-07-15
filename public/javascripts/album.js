function setup() {
  
  const $root = $('#background');
  console.log($root.width(), $root.height());
  const canvas = createCanvas($root.width(), $root.height());
  canvas.parent('background');
  console.log(canvas);
  background(0);
  
}


function draw() {

}