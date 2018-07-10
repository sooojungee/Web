function setup() {
  const $root = $('#renderer');
  const canvas = createCanvas($root.width(), $root.height());
  
  canvas.parent('renderer');
  background(0);
}

const inputs = $('input');

$('#exe').on('click', () => {
  const data = {};
  for (let i = 0; i < inputs.length; i++) {
    const $input = $(inputs[i]);
    const k = $input.attr('name');
    const v = $input.val();
    data[k] = v;
  }
  
  // console.log('ss', data);
  // console.log(data.startBranchCount);
  fractalGenerator.generator(data);
});

function draw() {


}