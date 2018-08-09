const $button = $('.button');
const $member = $('.member');
const $root = $('.result-zone');

$member.on('click', function () {
  
  const $this = $(this);
  if (!$this.hasClass('click')) {
    $this.addClass('click');
  }
  else {
    $this.removeClass('click');
  }
});

const readFile = (id) => {
  return new Promise((resolve, reject) => {
    $.get(`/data/member${id}.json`, function (data) {
      resolve(data);
    })
  });
  
};

$button.on('click', async () => {
  
  $root.empty();
  const clicked = $('.search-zone').find('.click');
  const template = `<div class = result></div>`;
  const files = await Promise.all(_.map(clicked, (data) => readFile(data.id)));
  
  _.forEach(files, (data) => {
    const $ele = $(template);
    $ele.text(`이름 : ${data.name}, 나이 : ${data.age}`);
    $root.append($ele);
  });
  
});


//Promise 쓴거

// const readFile = (id) => {
//   return new Promise((resolve, reject) => {
//     $.get(`/data/member${id}.json`, function (data) {
//       resolve(data);
//     })
//   });
//
// };
//
// $button.on('click', async () => {
//
//   $root.empty();
//   const clicked = $('.search-zone').find('.click');
//   const clickedData = [];
//   const template = `<div class = result></div>`;
//
//   for (let i = 0; i < clicked.length; i++) {
//     clickedData.push(await readFile(clicked[i].id));
//   }
//
//   _.forEach(clickedData, (data) => {
//     const $ele = $(template);
//     $ele.text(`이름 : ${data.name}, 나이 : ${data.age}`);
//     $root.append($ele);
//   });
//
// });


// Promise 안쓴거

// let fileData = [];
// $button.on('click', () => {
//
//   $root.empty();
//   fileData = [];
//   const clicked = $('.search-zone').find('.click');
//
//   if (clicked.length > 0)
//     nonPromise(clicked);
//
// });
//
// function nonPromise(files) {
//
//   const template = `<div class = result></div>`;
//
//   $.get(`/data/member${files[0].id}.json`, function (data) {
//     fileData.push(data);
//     files.splice(0, 1);
//
//     if (files.length > 0) {
//       return nonPromise(files);
//     }
//     else {
//       _.forEach(fileData, (data) => {
//         const $ele = $(template);
//         $ele.text(`이름 : ${data.name}, 나이 : ${data.age}`);
//         $root.append($ele);
//       });
//     }
//   })
//
// }


