// let blogCard = [
//   {
//     text: 'fractal',
//     date: 'JULY 2018',
//     imgUrl: 'https://preview.ibb.co/bzYEYd/2018_07_22_8_17_13.png',
//     siteUrl: 'https://sooojungee.github.io/public/views/instagram.html',
//     tag: ['fractal', 'canvas']
//   },
//   {
//     text: 'textFinder',
//     date: 'JULY 2018',
//     imgUrl: 'https://preview.ibb.co/c0zJ9J/2018_07_22_7_06_49.png',
//     siteUrl: 'https://sooojungee.github.io/public/views/textfinder.html',
//     tag: ['button', 'input']
//   },
//   {
//     text: 'JsonFilter',
//     date: 'JUNE 2018',
//     imgUrl: 'https://preview.ibb.co/crYpGy/2018_07_22_5_56_08.png',
//     siteUrl: 'https://sooojungee.github.io/public/views/jsonfilter.html',
//     tag: ['json', 'filter', 'select']
//   },
//   {
//     text: 'calculator',
//     date: 'JUNE 2018',
//     imgUrl: 'https://preview.ibb.co/g5Gy9J/2018_07_22_7_03_06.png',
//     siteUrl: 'https://sooojungee.github.io/public/views/calculator.html',
//     tag: ['calculator', 'eval', 'math']
//   },
//   {
//     text: 'kakaotalk',
//     date: 'JUNE 2018',
//     imgUrl: 'https://preview.ibb.co/eMr9Gy/2018_07_22_5_55_12.png',
//     siteUrl: 'https://sooojungee.github.io/public/views/kakaologin.html',
//     tag: ['alter', 'atag....']
//   },
//   {
//     text: 'firebase',
//     date: 'JUNE 2018',
//     imgUrl: 'https://preview.ibb.co/iVmtby/2018_07_22_5_54_35.png',
//     siteUrl: 'https://sooojungee.github.io/public/views/firebase.html',
//     tag: ['animation', 'hover', 'grid']
//   },
//
//   {
//     text: 'instagram',
//     date: 'JUNE 2018',
//     imgUrl: 'https://preview.ibb.co/jeFpid/2018_07_22_5_53_59.png',
//     siteUrl: 'https://sooojungee.github.io/public/views/instagram.html',
//     tag: ['flex-wrap', 'icon', 'grid']
//   },
//
// ];
//
// const cardJson = JSON.parse(JSON.stringify(blogCard));
//
// new function () {
//   for(let i = 0; i < cardJson.length; i++){
//     addCard(cardJson[i]);
//   }
// };
//
// console.log(cardJson[0].tag.length);
//
//
// console.log(Object.keys(cardJson[0]).length);
//
// function addCard(arr) {
//
//   let template = `<div class="col-md-4">
//     <div class="card mb-4 box-shadow"><img class="card-img-top padding-8" src=${arr.imgUrl} alt="Card image cap" />
//         <div class="card-body">
//             <div class="tag-content" id=${arr.text}>
//             </div>
//             <p class="card-text">${arr.text}</p>
//             <div class="d-flex justify-content-between align-items-center"><a class="btn-group" href=${arr.siteUrl}><button class="btn btn-sm btn-outline-secondary width" type="button">View</button></a><small class="text-muted">${arr.date}</small></div>
//         </div>
//     </div>
// </div>`;
//
//   $('#row').append(template);
//
//   const id = arr.text;
//   const tags = arr.tag;
//   for(let i = 0; i < tags.length; i++){
//     $('#'+id).append(`<div class="tag"> #${tags[i]}</div>`);
//   }
//
//   return this;
//
// }
//
// const $input = $('#input');
// const $search = $('#search');
// const $tags = $('.tag');
// $search.on('click', ()=>{
//   const val = $input.val();
//   console.log(val);
// });
//
// $input.on('keyup', (e)=>{
//   const val = $input.val();
//   if(e.keyCode === 13){
//     console.log(val);
//   }
//
// });
//
// $(document).on('click', 'tag' ,()=>{
//   const $this = $(this);
//   const text = $this.html();
//   console.log(text);
//
// });

let blogCard = [
  {
    text: 'fractal',
    date: 'JULY 2018',
    img: '../images/fractal.png',
    siteUrl: 'https://sooojungee.github.io/public/views/instagram.html',
    tag: ['fractal', 'canvas', 'rotate', 'color', 'skdufhskdufh', 'a']
  },
  {
    text: 'textFinder',
    date: 'JULY 2018',
    img: '/images/textFinder.png',
    siteUrl: 'https://sooojungee.github.io/public/views/textfinder.html',
    tag: ['button', 'input', 'skdufhskdufh']
  },
  {
    text: 'JsonFilter',
    date: 'JUNE 2018',
    img: '/images/jsonFilter.png',
    siteUrl: 'https://sooojungee.github.io/public/views/jsonfilter.html',
    tag: ['json', 'filter', 'select', 'skdufhskdufh']
  },
  {
    text: 'calculator',
    date: 'JUNE 2018',
    img: '/images/calculator.png',
    siteUrl: 'https://sooojungee.github.io/public/views/calculator.html',
    tag: ['calculator', 'eval', 'math', 'skdufhskdufh']
  },
  {
    text: 'kakaotalk',
    date: 'JUNE 2018',
    img: '/images/kakao.png',
    siteUrl: 'https://sooojungee.github.io/public/views/kakaologin.html',
    tag: ['input', 'password', 'atag...........', 'skdufhskdufh', 'a']
  },
  {
    text: 'firebase',
    date: 'JUNE 2018',
    img: '/images/firebase.png',
    siteUrl: 'https://sooojungee.github.io/public/views/firebase.html',
    tag: ['animation', 'hover', 'grid', 'a']
  },
  
  {
    text: 'instagram',
    date: 'JUNE 2018',
    img: '/images/instagram.png',
    siteUrl: 'https://sooojungee.github.io/public/views/instagram.html',
    tag: ['flex-wrap', 'icon', 'grid']
  },

];
let data = JSON.parse(JSON.stringify(blogCard));

let template = `<div class="col-md-4 view">
    <div class="card mb-4 box-shadow"><img class="card-img-top padding-8" alt="Card image cap" />
        <div class="card-body">
            <div class="tag-content">
            </div>
            <p class="card-text"></p>
            <div class="d-flex justify-content-between align-items-center"><a class="btn-group"><button class="btn btn-sm btn-outline-secondary width" type="button">View</button></a><small class="text-muted"></small></div>
        </div>
    </div>
</div>`;

let $row = $('#row').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.col-md-4',
  // use element for option
  columnWidth: '.col-md-4',
  percentPosition: true
});


function Element(data) {
  const $ele = $(template);
  this.$ele = $ele;
  
  $ele.find('img').attr('src', data.img);
  $ele.find('.card-text').text(data.text);
  $ele.find('.text-muted').text(data.date);
  $ele.find('.btn-group').attr('href', data.siteUrl);
  
  $row.append($ele).masonry('appended', $ele);
  
  for (let i = 0; i < data.tag.length; i++) {
    $ele.find('.tag-content').append(`<div class = tag>#${data.tag[i]}</div>`);
  }
  
  
  this.hasTag = (val) => {
    
    for (let i = 0; i < data.tag.length; i++) {
      const tagValue = data.tag[i].toLowerCase();
      if (tagValue.indexOf(val) !== -1) {

        if ($ele.hasClass('display-none'))
          $ele.removeClass('display-none');
        
        break;
      }
      else {
        
        if (!$ele.hasClass('display-none'))
          $ele.addClass('display-none');

        
      }
    }
    //
    // $row.imagesLoaded().progress(function () {
    //   $row.masonry('layout');
    // });
    
    
  };
  
  
  
  
  
  $row.imagesLoaded().progress(function () {
    $row.masonry('layout');
  });
  
  
  return this;
}


let elements = _.map(data, (d) => new Element(d));
const $input = $(input);

$input.on('keyup', () => {
  
  let val = $input.val().toLowerCase();
  
  for (let i = 0; i < elements.length; i++) {
    elements[i].hasTag(val);
    // $row.imagesLoaded().progress(function () {
    //   $row.masonry('layout');
    // });
    
  }
  
  $row.imagesLoaded(function () {
    $row.masonry('layout');
  });
  //
  // var $grid = $('.grid').imagesLoaded( function() {
  //   // init Masonry after all images have loaded
  //   $grid.masonry({
  //     // options...
  //   });
  // });
  //
  
  
  // setTimeout(()=>{
  //   $row = $('#row').masonry({
  //     // set itemSelector so .grid-sizer is not used in layout
  //     itemSelector: '.col-md-4',
  //     // use element for option
  //     columnWidth: '.col-md-4',
  //     percentPosition: true
  //   });
  // },1000)
  
  // console.log('?');
  
  // $row.imagesLoaded().progress(function () {
  //   $row.masonry('layout');
  // });
  
  
});