const $button = $('.button');
const $member = $('.member');
const $root = $('.result-zone');


const readFile = (id) => {
  
  return new Promise((resolve, reject) => {
    $.get(`/data/member${id}.json`, function (data) {
      resolve(data);
    })
  });
  
};


$member.on('click', function () {
  
  const $this = $(this);
  if (!$this.hasClass('click')) {
    $this.addClass('click');
  }
  else {
    $this.removeClass('click');
  }
});


$button.on('click', async () => {

  $root.empty();
  const clicked = $('.search-zone').find('.click');

  for (let i = 0; i < clicked.length; i++) {
    const element = await readFile(clicked[i].id);
    const $template = `<div class = result> 이름 : ${element.name}, 나이 : ${element.age} </div>`;
    $root.append($template);
  }

});

