let $row = $('#row').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.col-md-4',
  // // use element for option
  columnWidth: '.col-md-4',
  // initLayout: false,
  percentPosition: true
});

$.getJSON('/data/gallery.json', function (json) {
  
  let elements = [];
  
  elements = _.map(json, (d) => new Element(d));
  
  // for (let i = 0; i < 60; i++) {
  //   elements.push(new Element(json[i]));
  // }
  
});


// const template = `<div class="col-md-4">
//     <div class="card mb-4 box-shadow"><img class="card-img-top" alt="Card image cap" />
//         <div class="card-body">
//             <p class="card-text"></p>
//             <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group"><button class="btn btn-sm btn-outline-secondary" type="button">View</button><button class="btn btn-sm btn-outline-secondary" type="button">Edit</button></div></div>
//         </div>
//     </div>
// </div>`;



const template = `<div class="col-md-4 padding-0">
    <div class="card mb-4 box-shadow margin-0 border-0"><img class="card-img-top" alt="Card image cap" />
    </div>
</div>`;

function Element(data) {
  
  const $ele = $(template);
  this.$ele = $ele;
  
  $ele.find('img').attr('src', '../images/raw/' + data.rawFileName);
  
  const num = Number(data.numberOfPeople) - 7;
  // $ele.find('.card-text').text(data.text);
  // $ele.find('.text-muted').text(data.date);
  // $ele.find('.btn-group').attr('href', data.siteUrl);
  
  
  $row.append($ele).masonry('appended', $ele);
  
  //padding을 줘야하나
  // for (let i = 0; i < data.tag.length; i++) {
  //   $ele.find('.tag-content').append(`<div class = tag>#${data.tag[i]}</div>`);
  // }
  
  const rowWidth = Number($row.width());
  
  const unit = Math.floor(rowWidth / 6);
  
  
  
  
  if (Number(data.numberOfPeople) < 4) {
    // $ele.css('border', '3px solid red');
    $ele.css('max-width', `${unit}px`);
  }
  else if (Number(data.numberOfPeople) > 3 && Number(data.numberOfPeople) < 8) {
    // $ele.css('border', '3px solid green');
    $ele.css('max-width', `${unit * 2}px`);
  }
  else {
    $ele.attr('id',Number(data.numberOfPeople) );
    // $ele.css('border', '3px solid blue');
    $ele.css('max-width', `${unit * 3}px`);
  }
  
  
  
  // const width = Number($ele.width());
  //
  // const a = width * 2 / 3;
  if (Number(data.numberOfPeople) < 4) {
    $ele.find('img').css('height', `${unit}px`);
    // $ele.find('.card-img-top').css('max-height', width + 'px !important');
  }
  else if (Number(data.numberOfPeople) > 3 && Number(data.numberOfPeople) < 8) {
    $ele.find('img').css('height', `${unit * 2}px`);
    // $ele.find('.card-img-top').css('max-height', width + 'px !important');
  }
  else {
    $ele.find('img').css('height', `${unit * 2}px`);
    // $ele.find('.card-img-top').css('max-height', width * (2 / 3) + 'px !important');
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
    
  };
  
  $row.imagesLoaded().progress(function () {
    $row.masonry('layout');
  });
  
  
  return this;
}

$row.imagesLoaded().progress(function () {
  $row.masonry('layout');
});