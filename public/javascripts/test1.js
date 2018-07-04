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


var arr1 = 'hello. my name?; is lee';
var token = arr1.split(/([.|?|!])/g);
var tokens = arr1.split(/'. '/g);

console.log(tokens);