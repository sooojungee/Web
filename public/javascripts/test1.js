// // var a =  1;
// // function b(){
// //     console.log(a);
// //
// //     a = 4;
// // }
// //
// // b();
// //
// // const c =  2;
// // function d(){
// //     console.log(c);
// //     c = 4;
// // }
// //
// // console.log(c);
// //
// // d();
//
// const data = {};
// const t1 = {
//   name: {
//     age: 24
//   }
// };
//
// const t3 = {
//   name: {
//     age: 22
//   }
// };
// const t2 = {
//   name: {
//     age: 23
//   }
// };
//
// data['test1'] = t1;
// data['test2'] = t2;
// data['test3'] = t3;
//
// // const id = Object.keys(data)[0];
// // console.log(id);
// // const elea = data[id];
// // console.log(elea);
// // elea.remove();
// // delete data[id];
//
// const id = Object.keys('test1')[0];
// console.log('ll', id );
// const ele = data[id];
// console.log('kk', ele);
// ele.remove();
// delete eles[id];
//
// // const id = Object.keys(d)[0];
// // const ele = eles[id];
// // ele.remove();
// console.log(Object.keys(data));
// console.log(data);


// const test = {};
// test['🎼'] = 111;
// console.log(test['🎼']);


var text = 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.Rackham.\n';
let sliceText = [];
// console.log(textsplit);
// var originText = text.split('. ');
// for (var i = 0; i < originText.length; i++) {
//   sliceText[i * 2] = originText[i].concat('.');
//   sliceText[i * 2 + 1] = ' ';
// }
// console.log(sliceText);
//


// var str = 'Animation/rawr/javascript.js';
// var stt = 'aa/bb.cc;dd';
// var tokens = stt.match(/[^\.]+\.?|\//g);
// console.log(tokens);

// var foo = {
//   name: 'foo',
//   age: 42
// }
//
// var prop;
// for (prop in foo) {
//   console.log(prop, foo.prop);
// }
//
// console.dir(foo);

// function Hello(func){
//   this.greeting = 'hello';
// }
//
// Hello.prototype.call = function(func){
//   console.log('func', func);
//   console.log('gg', this);
//   func ? func(this.greeting) : this.func(this.greeting);
//   // console.log('func(this.greeting)', func(this.greeting));
//   // console.log('this.func(this.greeting)', this.func(this.greeting));
//   //
// }
//
// var user = function(greeting){
//   console.log('greeting', greeting);
// }
//
// var objHello = new Hello();
// objHello.func = user;
// console.log(objHello);
// objHello.call();
//


// var arr = [0, 1, 2];
// arr.num = 3;
// console.log(arr.length); // 결과 : 3
// console.log(arr); // 결과 : 3
//
// arr[3] = 3;
// console.log(arr.length); // 결과 : 4
// console.log(arr); // 결과 : 4
//
// console.dir(arr);

// var arr = ['bar'];
// var obj = {
//   0 : 'ss',
//   name : 'foo',
//   length : 0
// };
//
//
// // console.log(obj.length);
//
// //
// Array.prototype.push.apply(obj, ['baz']);
// Array.prototype.push.apply(obj, ['baz']);
// console.log(obj);
// console.log(obj.length);
//



// console.log(obj['0']);
// console.log(obj['99']);
// console.log(obj['102']);

// console.log(!!22); // 결과 : false
// console.log(!!1); // 결과 : true
// console.log(!!'string'); // 결과 : true
// console.log(!!''); // 결과 : false
// console.log(!!true); // 결과 : true
// console.log(!!false); // 결과 : false
// console.log(!!null); // 결과 : false
// console.log(!!undefined); // 결과 : false
// console.log(!!{}); // 결과 : true
// console.log(!![]); // 결과: true



// var add = function sum(x, y) {
//   return x + y;
// };
//
// console.log(add(3, 4));
// console.log(sum(3, 4));

//
// var func = function(){
//   return 42;
// };
//
// console.log(func());
//
// (function(){
//   console.log('hi');
// })();

function rgb2hsv () {
  var rr, gg, bb,
    r = arguments[0] / 255,
    g = arguments[1] / 255,
    b = arguments[2] / 255,
    h, s,
    v = Math.max(r, g, b),
    diff = v - Math.min(r, g, b),
    diffc = function(c){
      return (v - c) / 6 / diff + 1 / 2;
    };
  
  if (diff == 0) {
    h = s = 0;
  } else {
    s = diff / v;
    rr = diffc(r);
    gg = diffc(g);
    bb = diffc(b);
    
    if (r === v) {
      h = bb - gg;
    }else if (g === v) {
      h = (1 / 3) + rr - bb;
    }else if (b === v) {
      h = (2 / 3) + gg - rr;
    }
    if (h < 0) {
      h += 1;
    }else if (h > 1) {
      h -= 1;
    }
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  };
}

let a = rgb2hsv(255, 0, 0);
// console.log(typeof a.v);

/*

const fractalGenerator = new function () {
  
  let generateData = {};
  let count = 0;
  let checkCount = 0;
  let checkFrame = 0;
  let exec = false;
  
  const drawLineByAngle = (x1, y1, degree, depth, count) => {
    const length = Math.pow(generateData.childBranchLengthRatio, depth)
      * generateData.initialBranchLength;
    
    if (depth > generateData.depthCount) return;
    
    const radian = degree / 180.0 * Math.PI;
    const x2 = Math.cos(radian) * length + x1;
    const y2 = Math.sin(radian) * length + y1;
    
    
    const c = lerpHexColor(depth / generateData.depthCount);
    const opacity = 255 - depth / generateData.depthCount * 255;

    // if(depth < generateData.depthCount / 2)
    //   stroke(c.r, c.g, c.b, opacity / 50);
    // else
    //   stroke(c.r, c.g, c.b, (255 - (depth / generateData.depthCount * 255)) / (50 * depth / 2));
    //
    
    if(checkCount === depth) {
      stroke(c.r, c.g, c.b, opacity);
      line(x1, y1, x2, y2);
    }
    
    let startAngle = -(generateData.childBranchCount - 1)
      * generateData.childBranchAngle / 2 + degree * 1;
    
    for (let i = 0; i < generateData.childBranchCount; i++) {
      drawLineByAngle(x2, y2, startAngle, depth + 1);
      startAngle += generateData.childBranchAngle * 1;
    }
    
  };
  
  const lerpHexColor = (ratio) => {
    const r1 = Number('0x' + generateData.startColor[1] + generateData.startColor[2]);
    const g1 = Number('0x' + generateData.startColor[3] + generateData.startColor[4]);
    const b1 = Number('0x' + generateData.startColor[5] + generateData.startColor[6]);
    const r2 = Number('0x' + generateData.endColor[1] + generateData.endColor[2]);
    const g2 = Number('0x' + generateData.endColor[3] + generateData.endColor[4]);
    const b2 = Number('0x' + generateData.endColor[5] + generateData.endColor[6]);
    
    const r = r1 * (1 - ratio) + r2 * ratio;
    const g = g1 * (1 - ratio) + g2 * ratio;
    const b = b1 * (1 - ratio) + b2 * ratio;
    
    return {r, g, b};
    
  };
  
  this.setFrameCount = (frame) => {
    count = frame;
    checkFrame = frame;
    this.draws();
  };
  
  this.setExec = (exe) => {
    exec = exe;
  };
  
  this.generator = (data) => {
    generateData = data;
    blendMode(BLEND);
    background(0);
    blendMode(ADD);
    checkCount = 0;
    // const cx = width / 2;
    // const cy = height / 2;
    // let checkCount = 0;
    // const dAngle = 360.0 / generateData.startBranchCount;
    // let currentAngle = 0;
    //
    // if(count % 10 === 0) {
    //   checkCount += 1;
    //   console.log(checkCount);
    // }
    //
    // if(checkCount < 10) {
    //   for (let i = 0; i < generateData.startBranchCount; i++) {
    //     drawLineByAngle(cx, cy, currentAngle, 1);
    //     currentAngle += dAngle;
    //   }
    // }
    // this.draws();
  };
  
  this.draws = () => {
    const cx = width / 2;
    const cy = height / 2;
    const dAngle = 360.0 / generateData.startBranchCount;
    let currentAngle = 0;
    
    
    if (exec && count % 2 === 0 && checkCount < generateData.depthCount) {
      for (let i = 0; i < generateData.startBranchCount; i++) {
        drawLineByAngle(cx, cy, currentAngle, 1, count);
        currentAngle += dAngle;
      }
      checkCount += 1;
  
    }
  }
  
};

 */

// function calculate(a, b, c){
//   return a*b+c;
// }
//
// function curry(func){
//   var args = Array.prototype.slice.call(arguments, 1);
//   console.log(arguments.length);
//   console.log(arguments);
//   return function (){
//     // console.log('sss', this);
//
//     return func.apply(this, args.concat(Array.prototype.slice.call(arguments)));
//   }
// }
//
// var func1 = curry(calculate, 1, 2);
// console.log('s', func1(3));

// function add(x, y){
//   return x + y;
// }
//
// console.log(typeof add);
// add.result = add(3, 2);
// add.status = 'OK';
// console.log(add.result);
// console.log(add.status);
// console.log(add);

// var foo = function(func){
//   func();
// };
//
// var t = function() {
//   console.log('Function can be used as the argument');
// };
//
// foo(t);
//


// var b = Math.random();
// for(var i = 0; i < 6; i ++){
//   console.log(Math.random() * 5 + 3);
// }


//
// let c = [];
// let b = [];
// for(let i = 0; i < 5; i++){
//   b.push(i * 2);
// }
//
// c.push(b);
// b = [];
//
// console.log(c);
// console.log(b);
//
// for(let i = 0; i < 5; i++){
//   b.push(i * 3);
// }
//
// c.push(b);
// b = [];
//
// console.log(c);
// console.log(b);


let blogCard = [
  {
    text: 'fractal',
    date: 'JULY 2018',
    imgUrl: 'https://preview.ibb.co/bzYEYd/2018_07_22_8_17_13.png',
    siteUrl: 'https://sooojungee.github.io/public/views/instagram.html',
    tag: ['fractal', 'canvas']
  },
  {
    text: 'textFinder',
    date: 'JULY 2018',
    imgUrl: 'https://preview.ibb.co/c0zJ9J/2018_07_22_7_06_49.png',
    siteUrl: 'https://sooojungee.github.io/public/views/textfinder.html',
    tag: ['button', 'input']
  },
  {
    text: 'JsonFilter',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/crYpGy/2018_07_22_5_56_08.png',
    siteUrl: 'https://sooojungee.github.io/public/views/jsonfilter.html',
    tag: ['json', 'filter', 'select']
  },
  {
    text: 'calculator',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/g5Gy9J/2018_07_22_7_03_06.png',
    siteUrl: 'https://sooojungee.github.io/public/views/calculator.html',
    tag: ['calculator', 'eval', 'math']
  },
  {
    text: 'kakaotalk',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/eMr9Gy/2018_07_22_5_55_12.png',
    siteUrl: 'https://sooojungee.github.io/public/views/kakaologin.html',
    tag: ['alter', 'atag....']
  },
  {
    text: 'firebase',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/iVmtby/2018_07_22_5_54_35.png',
    siteUrl: 'https://sooojungee.github.io/public/views/firebase.html',
    tag: ['animation', 'hover', 'grid']
  },
  
  {
    text: 'instagram',
    date: 'JUNE 2018',
    imgUrl: 'https://preview.ibb.co/jeFpid/2018_07_22_5_53_59.png',
    siteUrl: 'https://sooojungee.github.io/public/views/instagram.html',
    tag: ['flex-wrap', 'icon', 'grid']
  },

];
const cardJson = JSON.parse(JSON.stringify(blogCard));
let val = 'grid';

let check = [];
// for(let i = 0; i < cardJson.length; i++){
//   let ele= cardJson[i].tag;
//   for(let j = 0; j < ele.length; j++){
//     if(ele[j].toString().toLowerCase() == val.toLowerCase()){
//       check.push(cardJson[i].text);
//     }
//   }
//   // console.log(i);
//
// }


// for(let i = 0; i < cardJson.length; i++){
//   let ele= cardJson[i].tag;
//   if($.inArray(3, arrTmp) != -1){
//
//     alert("찾았음");
//
//   }else{
//
//     alert("없음");
//
//   }
//
// }

// console.log(check);