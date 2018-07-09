let test;


function setup() {
  test = new Test();
  var canvas = createCanvas(800, 600);
  canvas.parent('sketch');
  
  $('.execute').on('click', function () {
    const length = Number($('#length').val());
    const root = Number($('#root').val());
    const depth = Number($('#depth').val());
    const num = Number($('#branch').val());
    const angle = Number($('#angle').val());
  
  
    test.setItems(root, num, depth, length, angle);
  });
  $('.type').on('click', function(){
    console.log('gg');
    test.setColor($(this).attr('index'));
  })
}

function draw() {
  background(0);
  test.drawItems();
}


function Test() {
  
  let root;
  let num;
  let depth;
  let rad;
  let length;
  let that = this;
  let colorNum;
  let r;
  let g;
  let b;
  let angle;
  
  
  this.setItems = function (r, n, d, l, a) {
    root = r;
    num = n;
    depth = d;
    rad = 180.0 / (n + 1);
    length = l;
    angle = a;
    console.log(r, n, d, l);
  };
  
  this.setColor = function(num){
    colorNum = num;
    switch(colorNum){
      case 1:
        r = 200;
        g = 10;
        b = 10;
        break;
      case 2:
        r = 100;
        g = 30;
        b = 100;
        break;
      case 3:
        r = 150;
        g = 80;
        b = 80;
        break;
      case 4:
        r = 227;
        g = 200;
        b = 30;
        break;
    }
  };
  
  this.drawItems = function () {
    background(0);
    translate(400, 300);
    
    for (var i = 0; i < root; i++) {
      rotate(radians(360.0 / root));
      stroke(r, g, b);
      line(0, 0, length, length);
      that.drawItemsReplay(depth, length);
    }
  };
  
  this.color = function(colorNum){
  
  };
  
  
  this.drawItemsReplay = function (n, length) {
    rad = 180.0 / (num + 1);
    for (var j = 0; j < num; j++) {
      translate(length, length);
      stroke(100, n * 30, n * 10);
      rotate(radigans(-90));
      rotate(radians(rad * (j + 1)));
      // rect(0, 0, 50, 50);
      line(0, 0, length, length);
      
      if (n > 2) {
        that.drawItemsReplay(n - 1, length);
      }
      
      rotate(radians(-rad * (j + 1)));
      rotate(radians(90));
      translate(-length, -length);
      
    }
  };
  
}


// var test = new Test();
//
// var root = 6;
// var num = 4;
// var depth = 4;
// var rad = 180.0 / (num + 1);
// var length = 0;
//
//
// $('.execute').on('click', function(){
//   length = Number($('#length').val());
//   root = Number($('#root').val());
//   depth = Number($('#depth').val());
//   num = Number($('#branch').val());
//   rad = 180.0 / (num + 1);
//
// });
//
// function setup() {
//
//   var canvas = createCanvas(800, 600);
//   canvas.parent('sketch');
//
// }
//
// function draw() {
//
//   background(0);
//
//   translate(400, 300);
//
//
//   for (var i = 0; i < root; i++) {
//     rotate(radians(360.0 / root));
//     fill(255);
//     stroke(100, 30 * i, 100);
//     // rect(0, 0, 50, 50);
//     line(0, 0, length, length);
//
//     new Test(depth);
//
//   }
//
// }
//
//
// function Test(n) {
//
//   rad = 180.0 / (num + 1);
//
//   for (var j = 0; j < num; j++) {
//     translate(length, length);
//     stroke(100, n * 30, n * 10);
//     rotate(radians(-90));
//     rotate(radians(rad * (j + 1)));
//     // rect(0, 0, 50, 50);
//     line(0, 0, length, length);
//
//     if (n > 2){
//       new Test(n-1);
//     }
//
//     // for (var h = 0; h < num; h++) {
//     //   translate(30, 30);
//     //   stroke(0, 255, 0);
//     //   rotate(radians(-90));
//     //   rotate(radians(rad * (h + 1)));
//     //   // rect(0, 0, 50, 50);
//     //   line(0, 0, 30, 30);
//     //   rotate(radians(-rad * (h + 1)));
//     //   rotate(radians(90));
//     //   translate(-30, -30);
//     // }
//
//     rotate(radians(-rad * (j + 1)));
//     rotate(radians(90));
//     translate(-length, -length);
//
//   }
//
//   // for (var j = 0; j < num; j++) {
//   //   translate(30, 30);
//   //   stroke(255);
//   //   rotate(radians(-90));
//   //   rotate(radians(rad * (j + 1)));
//   //   // rect(0, 0, 50, 50);
//   //   line(0, 0, 30, 30);
//   //
//   //   for (var h = 0; h < num; h++) {
//   //     translate(30, 30);
//   //     stroke(0, 255, 0);
//   //     rotate(radians(-90));
//   //     rotate(radians(rad * (h + 1)));
//   //     // rect(0, 0, 50, 50);
//   //     line(0, 0, 30, 30);
//   //     rotate(radians(-rad * (h + 1)));
//   //     rotate(radians(90));
//   //     translate(-30, -30);
//   //   }
//   //
//   //   rotate(radians(-rad * (j + 1)));
//   //   rotate(radians(90));
//   //   translate(-30, -30);
//   //
//   // }
// }


//
// function setup() {
//   var canvas = createCanvas(800, 600);
//   canvas.parent('sketch');
// }
//
// // let length ;
// // let root ;
// // let depth ;
// // let rad ;
//
// let length = 3;
// let root = 3;
// let depth = 3;
// let rad;
//
// $('.execute').on('click', function(){
//   const lengthInput = $('#length').val();
//   const rootInput = $('#root').val()
//   const depthInput = $('#depth').val();
//   const numInput = $('#size').val();
//
//   // length = Number(lengthInput);
//   // root = Number(rootInput);
//   // depth = Number(depthInput);
//   // rad = 180.0 / (numInput + 1);
//
// });
//
//
// const test = new Test();
// // const drawfunc = new draw();
//
//
// function draw(){
//
//
//
//
//
//   background(0);
//
//   translate(400, 300);
//
//   for (var i = 0; i < root; i++) {
//     rotate(radians(360.0 / root));
//     fill(255);
//     stroke(100, 30 * i, 100);
//     // rect(0, 0, 50, 50);
//     line(0, 0, 30, 30);
//     rad = 180.0 / (depth + 1);
//
//     new Test(depth, rad);
//
//   }
//
//
//   // background(0);
//
//   // translate(200, 200);
//
//   // var root = 4;
//   // var num = 2;
//   // var depth = 3;
//   // var rad = 180.0 / (num + 1);
//
//   // for (var i = 0; i < root; i++) {
//   //   rotate(radians(360.0 / root));
//   //   fill(255);
//   //   stroke(100, 30 * i, 100);
//   //   // rect(0, 0, 50, 50);
//   //   line(0, 0, 30, 30);
//   //
//   //   for (var j = 0; j < num; j++) {
//   //     translate(30, 30);
//   //     stroke(255);
//   //     rotate(radians(-90));
//   //     rotate(radians(rad * (j + 1)));
//   //     // rect(0, 0, 50, 50);
//   //     line(0, 0, 30, 30);
//   //
//   //     for (var h = 0; h < num; h++) {
//   //       translate(30, 30);
//   //       stroke(0, 255, 0);
//   //       rotate(radians(-90));
//   //       rotate(radians(rad * (h + 1)));
//   //       // rect(0, 0, 50, 50);
//   //       line(0, 0, 30, 30);
//   //       rotate(radians(-rad * (h + 1)));
//   //       rotate(radians(90));
//   //       translate(-30, -30);
//   //     }
//   //
//   //     rotate(radians(-rad * (j + 1)));
//   //     rotate(radians(90));
//   //     translate(-30, -30);
//   //
//   //   }
//   // }
// }
//
//
// function Test(n, rad) {
//
//   for (var j = 0; j < n; j++) {
//     translate(30, 30);
//     stroke(100, n * 30, n * 10);
//     rotate(radians(-90));
//     rotate(radians(rad * (j + 1)));
//     // rect(0, 0, 50, 50);
//     line(0, 0, 30, 30);
//
//     if (n > 2){
//       new Test(n-1);
//     }
//
//     // for (var h = 0; h < num; h++) {
//     //   translate(30, 30);
//     //   stroke(0, 255, 0);
//     //   rotate(radians(-90));
//     //   rotate(radians(rad * (h + 1)));
//     //   // rect(0, 0, 50, 50);
//     //   line(0, 0, 30, 30);
//     //   rotate(radians(-rad * (h + 1)));
//     //   rotate(radians(90));
//     //   translate(-30, -30);
//     // }
//
//     rotate(radians(-rad * (j + 1)));
//     rotate(radians(90));
//     translate(-30, -30);
//
//   }
//
//   // for (var j = 0; j < num; j++) {
//   //   translate(30, 30);
//   //   stroke(255);
//   //   rotate(radians(-90));
//   //   rotate(radians(rad * (j + 1)));
//   //   // rect(0, 0, 50, 50);
//   //   line(0, 0, 30, 30);
//   //
//   //   for (var h = 0; h < num; h++) {
//   //     translate(30, 30);
//   //     stroke(0, 255, 0);
//   //     rotate(radians(-90));
//   //     rotate(radians(rad * (h + 1)));
//   //     // rect(0, 0, 50, 50);
//   //     line(0, 0, 30, 30);
//   //     rotate(radians(-rad * (h + 1)));
//   //     rotate(radians(90));
//   //     translate(-30, -30);
//   //   }
//   //
//   //   rotate(radians(-rad * (j + 1)));
//   //   rotate(radians(90));
//   //   translate(-30, -30);
//   //
//   // }
// }

