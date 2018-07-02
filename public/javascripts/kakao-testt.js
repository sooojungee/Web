const userId = '이수정';
const template = `<div class="chat-group">
  <div class="chat">
    <div class="profile">
      <div class="profile-image"></div>
    </div>
    <div class="text-group">
      <div class="name"> </div>
      <div class="message-group">
        <div class="text"> </div>
        <div class="date"> </div>
        <div class="delete">x</div>
        <div class="empty"></div>
      </div>
    </div>
  </div>
</div>`;

function Element(id, isMine) {
  
  const $ele = $(template);
  const that = this;
  let elementData = {};
  
  $ele.attr('id', id);
  
  if (isMine) {
    $ele.find('.name').remove();
    $ele.find('.profile').remove();
    $ele.addClass('sender');
    $ele.find('.delete').on('click', function () {
      chatApi.deleteMessage(id);
      
    });
  }
  
  if (!isMine) {
    $ele.find('.delete').remove();
  }
  
  this.setMessage = function (data) {
    $ele.find('.name').text(data.id);
    $ele.find('.text').text(data.message);
    $ele.find('.date').text(data.date);
    
    elementData = data;
  };
  
  let prev = null;
  this.prev = function (ele) {
    if(ele === undefined) return prev;
    prev = ele;
    that.update();
  };
  
  let next = null;
  this.next = function (ele) {
    if(ele === undefined) return next;
    next = ele;
    that.update();
  };
  
  this.getUsername = function(){
    return elementData.id;
  };
  
  this.getUsertime = function(){
    return elementData.date;
  };
  
  this.setVisibledate = function(usage){
    $ele.find('.date').css('display', usage ? 'block': 'none');
  };
  
  this.setVisiblename = function(usage){
    $ele.find('.name').css('display', usage ? 'block': 'none');
  };
  
  this.setVisibleprofile = function(usage){
    $ele.find('.profile-image').css('visibility', usage ? 'visible': 'hidden');
  };
  
  this.update = function () {
    
    // if(prev !== null
    // && prev.getUsername() === that.getUsername()
    // && prev.getUserdate() === that.getUserdate()){
    //   prev.setVisibledate(false);
    //   that.setVisiblename(false);
    //   that.setVisibleprofile(false);
    // }
  
    if (prev !== null
      && prev.getUsername() === that.getUsername()
      && prev.getUsertime() === that.getUsertime()) {
      that.setVisiblename(false);
      that.setVisibleprofile(false);
    }
  
    // 1. 다음꺼와 나의 이름이 같으면서 나의 시간이 같으면 나의 시간을 삭제한다.
    if (next !== null
      && next.getUsername() === that.getUsername()
      && next.getUsertime() === that.getUsertime()) {
      that.setVisibledate(false);
    }
    
  };
  
  this.remove = function(){
    $ele.remove();
    
    if(prev !== null){
      prev.next(that.next());
    }
    if(next !== null){
      next.prev(that.prev());
    }
    
    if(next === null){
      prev.setVisibledate(true);
    }
  };
  
  $ele.appendTo($('.chatting'));
  this.$ele = $ele;
  return this;
  
};

const eles = {};

chatApi.on('child_removed', function (d) {
  const id = Object.keys(d)[0];
  const ele = eles[id];
  ele.remove();
  delete eles[id];
  
});

let lastElement = null;
chatApi.on('child_added', function (d) {
  const id = Object.keys(d)[0];
  const data = d[id];
  const date = new Date(data.date);
  const datestr = `${date.getHours() > 12 ? '오후' : '오전'} ${date.getHours() % 12}:${date.getMinutes()}`;
  data.date = datestr;
  const ele = new Element(id, userId === data.id);
  ele.setMessage(data);
  
  if(lastElement !== null){
    lastElement.next(ele);
    ele.prev(lastElement);
  }
  lastElement = ele;
  
  eles[id] = ele;
  
  $(".chatting").scrollTop($(".chatting")[0].scrollHeight);
  
});


const $textarea = $('textarea');
$textarea.on('keyup', function (e) {
  const val = $textarea.val();
  if (e.keyCode === 13) {
    if(val !== '') chatApi.sendMessage(userId, val);
    $textarea.val('');
  }
});