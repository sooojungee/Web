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

new function () {
  for(let i = 0; i < cardJson.length; i++){
    addCard(cardJson[i]);
  }
};

console.log(cardJson[0].tag.length);


console.log(Object.keys(cardJson[0]).length);

function addCard(arr) {
  
  let template = `<div class="col-md-4">
    <div class="card mb-4 box-shadow"><img class="card-img-top padding-8" src=${arr.imgUrl} alt="Card image cap" />
        <div class="card-body">
            <div class="tag-content" id=${arr.text}>
            </div>
            <p class="card-text">${arr.text}</p>
            <div class="d-flex justify-content-between align-items-center"><a class="btn-group" href=${arr.siteUrl}><button class="btn btn-sm btn-outline-secondary width" type="button">View</button></a><small class="text-muted">${arr.date}</small></div>
        </div>
    </div>
</div>`;
  
  $('#row').append(template);
  
  const id = arr.text;
  const tags = arr.tag;
  for(let i = 0; i < tags.length; i++){
    $('#'+id).append(`<div class="tag"> #${tags[i]}</div>`);
  }
  
  return this;
  
}

const $input = $('#input');
const $search = $('#search');
const $tags = $('.tag');
$search.on('click', ()=>{
  const val = $input.val();
  console.log(val);
});

$input.on('keyup', (e)=>{
  const val = $input.val();
  if(e.keyCode === 13){
    console.log(val);
  }
  
});

$(document).on('click', 'tag' ,()=>{
  const $this = $(this);
  const text = $this.html();
  console.log(text);
  
});