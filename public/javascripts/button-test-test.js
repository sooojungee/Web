const $clickType = $('.click-button i');
const find = new FindItems();
const text = $('#main-text').html();

function FindItems() {
  const style = new StyleItems();
  let select = null;
  let originText=[];
  let sliceText = [];
  const that = this;
  let input = null;
  let optionString = '';
  let mainViewText = [];
  let subViewText = [];
  this.setRadioSelected = function (selection) {
    console.log(selection);
    console.log(text);
    select = Number(selection);
    that.setRadio();
  };

  this.inputSetting = function (val) {
    console.log(val);
    input = val;
    // that.search();
    // sliceText = [];

    // that.setRadio();
    that.search();
    // console.log(sliceText.length);
  };

  this.setRadio = function () {
    sliceText = [];
    // if (select === 0) {
    //   for (var i = 0; i < text.length; i++) {
    //     sliceText[i] = text[i];
    //   }
    // }
    // else if (select === 1) {
    //   sliceText = text.split(' ');
    //   for (var i = 0; i < sliceText.length; i++) {
    //     sliceText[i] = sliceText[i].concat(' ');
    //   }
    // }
    // else if (select === 2) {
    //   sliceText = text.split('. ');
    //   for (var i = 0; i < sliceText.length; i++) {
    //     sliceText[i] = sliceText[i].concat('. ');
    //   }
    // }


    if (select === 0) {
      for (var i = 0; i < text.length; i++) {
        originText[i] = text[i];
        sliceText[i] = originText[i];
      }
    }
    else if (select === 1) {
      originText = text.split(' ');
      for (var i = 0; i < originText.length; i++) {
        sliceText[i * 2] = originText[i];
        sliceText[i * 2 + 1] = ' ';
      }
    }
    else if (select === 2) {
      originText = text.split('. ');
      for (var i = 0; i < originText.length; i++) {
        // originText[i] = originText[i].concat('.');
        sliceText[i * 2] = originText[i].concat('.');
        sliceText[i * 2 + 1] = ' ';
      }
      console.log(sliceText);
    }

    that.search();
  };

  this.search = function () {
    mainViewText = [];
    subViewText = [];
    // originText = [];
    const subText = 'sub-text';
    console.log('222', sliceText[0]);
    console.log(input);
    for (var i = 0; i < sliceText.length; i++) {
      // console.log('check!',sliceText[i].includes(input));
      if (sliceText[i].includes(input)) {
        console.log('optionString a', optionString);
        subViewText[i] = `<div class = "${subText}" id = "${i}">${sliceText[i]}</div>`;
        mainViewText[i] = `<span id = "${i}" style = "${optionString}">${sliceText[i]}</span>`;
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
  };

  this.setCheckSelected = function (option, usage) {
    if (usage) {
      const a = style.checkOnMessage(option);
      optionString += a;
    }
    else {
      const b = style.checkOffMessage(option);
      optionString = optionString.replace(b, "");
    }

    that.search();
  };

  this.findSubText = function (id) {
    $('#main-text span').css('color', 'black');

    console.log('mnmn', $(`#${id}`).css('color'));
    if ($(`#${id}`).css('color') !== 'rgb(255, 0, 0)') {
      $(`#${id}`).css('color', 'red');
      var offset = $(`#${id}`).offset();
      var winH = $('.main-content').height();
      $('.main-content').animate( { scrollTop : (offset.top - winH/2)}, 400);

    }

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


$(document).on('click', '.sub-text', function () {
  console.log('hho', $(this).text());
  console.log('hho', $(this).attr('id'));
  find.findSubText($(this).attr('id'));
});

$('input').on('keyup', function () {
  const val = $('input').val();
  find.inputSetting(val);
});


