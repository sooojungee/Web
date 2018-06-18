var $input = $('#messageInput');
var $sender = $('#sender');

$sender.on('click', function(){
   var message = $input.val();

    var template = `<div class="chat">
    <div class="flex"></div>
    <div class="me">${message}</div>
    </div>
    </div>`

    $('.chatting').append(template)
    $input.val('');

});