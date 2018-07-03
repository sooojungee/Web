const $clickType = $('.click-button i');
const find = new FindItems();
const text = $('#text').html();

// $('#text').

function FindItems() {
  const style = new StyleItems();
  let select = null;
  let sliceText = [];
  const that = this;
  let input = null;
  let checkitem = [];
  let optionString = '';
  this.setRadioSelected = function (selection) {
    console.log(selection);
    console.log(text);
    select = Number(selection);
    // that.setRadio();
  };
  
  this.inputSetting = function (val) {
    console.log(val);
    input = val;
    // that.search();
    sliceText = [];
    
    that.setRadio();
    that.search();
    console.log(sliceText.length);
  };
  
  this.setRadio = function () {
    if (select === 0) {
      for (var i = 0; i < text.length; i++) {
        sliceText[i] = text[i];
      }
    }
    else if (select === 1) {
      sliceText = text.split(' ');
      for (var i = 0; i < sliceText.length; i++) {
        sliceText[i] = sliceText[i].concat(' ');
      }
    }
    else if (select === 2) {
      sliceText = text.split('.');
      for (var i = 0; i < sliceText.length; i++) {
        sliceText[i] = sliceText[i].concat('.');
      }
    }
    else {
    
    }
  };
  
  this.search = function () {
    // console.log('gg', input);
    // console.log(sliceText[0]);
    for (var i = 0; i < sliceText.length; i++) {
      console.log('check!',sliceText[i].includes(input));
      if (sliceText[i].includes(input)) {
        console.log('optionString a', optionString);
        // console.log('ss', sliceText[i]);
        // '<span style="' + string + '">' + text[i] + '</span>'
        sliceText[i] = `<span style = "${optionString}"> ${sliceText[i]} </span>`;
      }
    }
    if (sliceText.length > 0)
      $('#text').html(sliceText.join('').toString());
    if (input === '')
      $('#text').html(text);
  };
  
  this.setCheckSelected = function (option, usage) {
    console.log('zz',usage);
    if (usage) {
      const a = style.checkOnMessage(option);
      optionString += a;
      console.log('234',optionString);
    }
    else {
      console.log('sdfaaaa ',option);
      const b = style.checkOffMessage(option);
      console.log('bbbb', b);
      optionString = optionString.replace(b, "");
    }
    
    console.log(optionString);
    that.search();
  };
  
  this.checkItems = function () {
  
  };
  
  
};

function StyleItems() {
  const array = [];
  
  this.checkOnMessage = function (op) {
    console.log('on', array);
    const option = Number(op);
    
    for (var i = 0; i < array.length; i++) {
      if (array[i] === option) {
        return 'ss';
      }
    }
    array.push(option);
  
    if (option === 0) {
      console.log('0');
      return 'text-decoration: underline; ';
    }
    else if (option === 1) {
      console.log('1');
      return 'background: yellow; ';
    }
    else if (option === 2) {
      console.log('2');
      return 'font-weight: 600; ';
    }
    else if (option === 3) {
      console.log('3');
      return 'font-style: italic; ';
    }
  
    console.log('skdfuh', array);
  
  };
  
  this.checkOffMessage = function (op) {
    const option = Number(op);
    console.log('off', array);
    for (var i = 0; i < array.length; i++) {
      if (array[i] === option) {
        delete array[i];
        if (option === 0) {
          return 'text-decoration: underline; ';
        }
        else if (option === 1) {
          return 'background: yellow; ';
        }
        else if (option === 2) {
          return 'font-weight: 600; ';
        }
        else if (option === 3) {
          return 'font-style: italic; ';
        }
      }
    }
    
    return;
  }
  
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


$('input').on('keyup', function () {
  const val = $('input').val();
  find.inputSetting(val);
});


