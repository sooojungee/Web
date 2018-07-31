const resizingImage = require('./resizingImage');
const fs = require('fs');
// $.getJSON('/data/gallery.json', function (json) {
//
//   _.map(json, (d) => new Resize(d));
//
// });


//
// function Resize(data) {
//
//   const img = new Image();
//
//   img.onload = function () {
//
//     const w = this.width;
//
//     const h = this.height;
//
//   };
//
//   img.src = '../images/' + data.rawFileName;
// }

let json;
fs.readFile('../data/gallery.json', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  json = data;
  const test = JSON.parse(json);
  console.log(test[1].rawFileName);
  
  
  
  
});



// console.log(json[1].rawFileName);
// 사진 크기를 코드로 불러와야 함.
// $.getJSON으로 이미지 이름이랑 매칭시켜서 인원 수만큼 크기 변수 받아서 리사이즈
// resizingImage.resize(34, 34, '../images/raw', '../images/small', 'small');
