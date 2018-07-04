const $clickType = $('.click-button i');
const find = new FindItems();
const text = $('#main-text').html();

function FindItems() {
  const style = new StyleItems();
  
  let selectRadio = null;
  let originText = [];
  let sliceText = [];
  const that = this;
  let input = null;
  let mainViewText = [];
  let subViewText = [];
  let $subId = null;
  
  this.setRadioSelected = function (selection) {
    selectRadio = Number(selection);
    that.setRadio();
    that.search();
  };
  
  this.setCheckSelected = function (selection, usage) {
    style.checkOption(selection, usage);
    that.search();
  };
  
  this.setInput = function (val) {
    input = val;
    that.search();
  };
  
  this.setRadio = function () {
    originText = [];
    sliceText = [];
    
    if (selectRadio === 0) {
      for (var i = 0; i < text.length; i++) {
        originText[i] = text[i];
        sliceText[i] = originText[i];
      }
    }
    else if (selectRadio === 1) {
      originText = text.split(/([,?. ])/);
      console.log(originText);
      for (var i = 0; i < originText.length; i++) {
        sliceText[i] = originText[i];
      }
    }
    else if (selectRadio === 2) {
      originText = text.split(/([.*?、])/g);
      console.log(originText);
      for (var i = 0; i < originText.length / 2 - 1; i++) {
        sliceText[i] = originText[i * 2].concat(originText[i * 2 + 1]);
      }
    }
  };
  
  this.search = function () {
    mainViewText = [];
    subViewText = [];
    
    const subText = 'sub-text';
    for (var i = 0; i < sliceText.length; i++) {
      if (sliceText[i].includes(input)) {
        subViewText[i] = `<div class = "${subText}" id = "${i}">${sliceText[i]}</div>`;
        mainViewText[i] = `<span id = "${i}">${sliceText[i]}</span>`;
      }
      else
        mainViewText[i] = sliceText[i];
    }
    
    if (sliceText.length > 0) {
      $('#main-text').html(mainViewText.join('').toString());
      $('#sub-text').html(subViewText.join('').toString());
    }
    if (input === '')
      $('#main-text').html(text);
  
    style.checkMessage();
    
  };
  
  this.findSubText = function (id) {
    $subId = $(`#${id}`);
  
    style.checkMessage();
  
    $('span').css('color', 'black');
  
    if ($subId !== null && $subId.css('color') !== 'rgb(255, 0, 0)') {
      console.log($subId);
      $subId.css('color', 'red');
      var offset = $subId.offset();
      var winH = $('.main-content').height();
      $('.main-content').animate({scrollTop: (offset.top - winH / 2)}, 400);
    }
    
  };
  
};

function StyleItems() {
  
  const that = this;
  let optionObject = {
    0: false,
    1: false,
    2: false,
    3: false
  };
  
  this.checkOption = function (op, usage) {
    if(usage){
      optionObject[op] = true;
    }
    else if(!usage){
      optionObject[op] = false;
    }
  };
  
  
  this.checkOnMessage = function (i) {
    
    if (i === 0) {
      $('span').css('text-decoration', 'underline');
    }
    if (i === 1) {
      $('span').css('background', 'yellow');
    }
    if (i === 2) {
      $('span').css('font-weight', '600');
    }
    if (i === 3) {
      $('span').css('font-style', 'italic');
    }
  };
  
  this.checkOffMessage = function (i) {
    
    if (i === 0) {
      $('span').css('text-decoration', 'none');
    }
    if (i === 1) {
      $('span').css('background', 'white');
    }
    if (i === 2) {
      $('span').css('font-weight', '400');
    }
    if (i === 3) {
      $('span').css('font-style', 'normal');
    }
    
    
  };
  
  this.checkMessage = function () {
    
    for(var i = 0; i < Object.keys(optionObject).length; i++){
      if(optionObject[i]){
        that.checkOnMessage(i);
      }
      else {
        that.checkOffMessage(i);
      }
    }
  };
  
  
}


$('.click-button').on('click', function () {
  
  if ($clickType.text() === 'navigate_next') {
    $('.nav').attr('status', 'open');
    $clickType.text('navigate_before');
  }
  else {
    $('.nav').attr('status', 'close');
    $clickType.text('navigate_next');
  }
  
});

$('.radio').on('click', function () {
  
  if ($(this).find('i').text() === 'radio_button_unchecked') {
    $('.radio').find('i').text('radio_button_unchecked');
    $(this).find('i').text('radio_button_checked');
    find.setRadioSelected($(this).find('.text').attr('index'));
  }
  else {
    $(this).find('i').text('radio_button_unchecked');
  }
});

$('.check').on('click', function () {
  if ($(this).find('i').text() === 'check_box_outline_blank') {
    $(this).find('i').text('check_box');
    find.setCheckSelected($(this).find('.text').attr('option'), true);
  }
  else {
    find.setCheckSelected($(this).find('.text').attr('option'), false);
    $(this).find('i').text('check_box_outline_blank');
    
  }
});


$(document).on('click', '.sub-text', function () {
  find.findSubText($(this).attr('id'));
});

$('input').on('keyup', function () {
  const val = $('input').val();
  find.setInput(val);
});


