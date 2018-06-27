var $input = $('#messageInput');
// var message = $input.val();
var userId = '이수정';
var arrId = [];

$input.on('keydown', function (e) {

  var message = $input.val();

  if (e.keyCode === 13 && message.length > 0) {
    chatApi.sendMessage(userId, message);
    $input.val('');

  }
  console.log(message);

});


chatApi.on('child_added', function (d) {

  arrId.push(d);

  var messageId = Object.keys(d)[0];

  var messageContent = d[messageId];
  var template = '';
  var time = new Date(messageContent.date);

  if (messageContent.id === userId) {
    template = `<div class="chat" index = ${messageId}>
    <div class="flex"></div>
    <i class="material-icons" id="close">close</i>
    <div class="date">${time.toLocaleTimeString()}</div>
    <div class="me">${messageContent.message}</div>
    </div>`
    if (arrId.length > 1 &&
      messageContent.id ===
      arrId[arrId.length - 2][Object.keys(arrId[arrId.length - 2])[0]].id
    ) {
      console.log(messageContent.message);



        var id = Object.keys(arrId[arrId.length - 2])[0];
        var content = arrId[arrId.length - 2][Object.keys(arrId[arrId.length - 2])[0]].message;
        $("[index=" + id + "]").html('<div class="flex"></div>\n' + '<i class="material-icons" id="close">close</i>' +
          '<div class="me"></div>');
        $("[index=" + id + "]").find('.me').text(content);

    }


  }
  else {
    // var arr = arrId[arrId.length - 2][Object.keys(arrId[arrId.length - 2])[0]].id;
    if (arrId.length > 1 &&
      messageContent.id === arrId[arrId.length - 2][Object.keys(arrId[arrId.length - 2])[0]].id) {
      template = `<div class="chat" index = ${messageId}>
      <div class="other">${messageContent.message}</div>
      <div class="date">${time.toLocaleTimeString()}</div>
      </div>`


      var id = Object.keys(arrId[arrId.length - 2])[0];
      var content = arrId[arrId.length - 2][Object.keys(arrId[arrId.length - 2])[0]].message;


      $("[index=" + id + "]").html('<div class="other"> </div>');
      $("[index=" + id + "]").find('.other').text(content);

      console.log($("[index=" + id + "]").html());

    }
    else {
      template = `<div class="chat-first" id=${messageId}><a class="photo" href="/users/kakaoprofile" title="profile"></a>
  <div class="profile">
    <div class="name">${messageContent.id}</div>
    <div class = "chat" index = ${messageId}>
    <div class="other">${messageContent.message}</div>
    <div class="date">${time.toLocaleTimeString()}</div>
    </div>
  </div>
</div>`
    }

  }

  $('.chatting').append(template);
  $(".chatting").scrollTop($(".chatting")[0].scrollHeight);
});


// 메세지 삭제 이벤트
chatApi.on('child_removed', function (d) {

  var messageId = Object.keys(d)[0];

  if ($("[index=" + messageId + "]").parents('.chat-first').length !== 0) {
    console.log('remove Id', messageId);
    $("#" + messageId).remove();
    for (var i = 0; i < arrId.length; i++) {
      console.log('qq' + Object.keys(arrId[i])[0]);
      if (messageId === Object.keys(arrId[i])[0]) {
        console.log('ss' + arrId[i]);
        var messageContent = arrId[i + 1][Object.keys(arrId[i + 1])[0]];
        var time = new Date(messageContent.date);

        var template = `<div class="chat-first" id=${Object.keys(arrId[i + 1])[0]}><a class="photo" href="/users/kakaoprofile" title="profile"></a>
      <div class="profile">
      <div class="name">${messageContent.id}</div>
      <div class = "chat" index = ${messageId}>
      <div class="other">${messageContent.message}</div>
      </div>
    </div>
    </div>`

        console.log(template);

        $("[index=" + Object.keys(arrId[i + 1])[0]+ "]").before(template);
        $("[index=" + Object.keys(arrId[i + 1])[0] + "]").remove();
        $("[index=" + messageId+ "]").find('.chat').attr('index', Object.keys(arrId[i + 1])[0]);
        break;
      }
    }
  }
  else {

    if($("[index=" + messageId + "]").children('.date').length){
      for (var i = 0; i < arrId.length - 1; i++) {
        console.log('ll' + messageId);
        console.log('kk' + Object.keys(arrId[i + 1])[0]);
        if(messageId === Object.keys(arrId[i + 1])[0]){
          console.log('dd');
          console.log(arrId[i + 1][Object.keys(arrId[i + 1])[0]].id);
          if(arrId[i+1][Object.keys(arrId[i + 1])[0]].id === arrId[i][Object.keys(arrId[i])[0]].id) {
            console.log('gg');
            $("[index=" + Object.keys(arrId[i])[0] + "]").append('<div class="date">${time.toLocaleTimeString()}</div>');
          }
        }
      }
    }


    $("[index=" + messageId + "]").remove();

  }



});

$(document).on('click', '#close', function () {
  for (var i = 0; i < arrId.length; i++) {
    var findArr = Object.keys(arrId[i])[0];
    if (findArr.toString() === $(this).parent().attr('index')) {
      chatApi.deleteMessage(findArr);
    }
  }

});

// $(document).on('click', '.chat', function () {
//
//
//   for (var i = 0; i < arrId.length; i++) {
//     var findArr = Object.keys(arrId[i])[0];
//     if (findArr.toString() === $(this).attr('index')) {
//       console.log(findArr);
//       chatApi.deleteMessage(findArr);
//
//     }
//   }
//
// });
//
