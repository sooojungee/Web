var $input = $('#messageInput');
var $sender = $('#sender');
// var message = $input.val();
var userId = '이수정';
var messageId;
var arrId = [];

var tt = [];

$input.keydown(function (e) {

  var message = $input.val();
  console.log(e);

  if (e.keyCode === 13 && message.length > 0) {
    chatApi.sendMessage(userId, message);
    $input.val('');

  }
  console.log(message);

});


// chatApi.deleteMessage(messageId);

chatApi.on('child_added', function (d) {

  arrId.push(d);

  var messageId = Object.keys(d)[0];
  var messageContent = d[messageId];
  var template = '';
  var time = new Date(messageContent.date);

  if (messageContent.id === userId) {
    template = `<div class="chat" index = ${messageId} >
    <div class="flex"></div>
    <div class="date">${time.toLocaleTimeString()}</div>
    <div class="me">${messageContent.message}</div>
    </div>`

  }
  else {
    if (arrId.length > 1 &&
      messageContent.id ===
      arrId[arrId.length - 2][Object.keys(arrId[arrId.length - 2])[0]].id) {
      template = `<div class="chat" index = ${messageId}>
      <div class="other">${messageContent.message}</div>
      <div class="date">${time.toLocaleTimeString()}</div>
      </div>`
    }
    else {
      template = `<div class="chat-first"><a class="photo" href="/users/kakaoprofile" title="profile"></a>
  <div class="profile">
    <div class="name">${messageContent.id}</div>
    <div class = "chat" index = ${messageId}>
    <div class="other">${messageContent.message}</div>
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

  console.log(messageId);
  $("[index=" + messageId + "]").remove();

});


$(document).on('click', '.chat', function () {


  var test1 = tt;
  console.log(tt.length);
  for (var i = 0; i < arrId.length; i++) {
    var findArr = Object.keys(arrId[i])[0];
    // var findcontent = arrId[i][Object.keys(arrId[i])[0]];
    if (findArr.toString() === $(this).attr('index')) {
      console.log(findArr);
      chatApi.deleteMessage(findArr);

    }
  }

});