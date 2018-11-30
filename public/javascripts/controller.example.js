const UIController = new function () {
  
  const $signIn = $('#loginButton');
  const $signOut = $('#logoutButton');
  const $input = $('input');
  const $readFile = $('#read');
  const $progress = $('.progress');
  const $drop = $('.drag-zone');
  const $view = $('.view');
  
  const $inputZone = $('.input-zone');
  
  $inputZone.on('click', () => {
    console.log('click');
  });
  $inputZone.trigger('click');
  $inputZone.trigger('click');
  
  
  $signIn.on('click', FirebaseApi.signIn);
  $signOut.on('click', FirebaseApi.signOut);
  
  FirebaseApi.setOnAuthStateChanged((u) => {
    if (!_.isNil(u)) {
      $signIn.css('display', 'none');
      $signOut.css('display', 'block');
    }
    else {
      $signIn.css('display', 'block');
      $signOut.css('display', 'none');
    }
  });
  
  FirebaseApi.setOnProgressListener((o) => {
    
    const length = 200 / o;
    console.log('sss', length);
    $progress.css('width', length);
  });
  
  FirebaseApi.setOnReadListener((files) => {
    const filecontent = [];
    for (let i = 0; i < files.length; i++) {
      filecontent.push(new AppendFile(files[i]));
      // const template = `<div class = "file">${files[i].name}</div>`;
      // $view.append(template);
    }
  });
  
  
  function AppendFile(file) {
    const template = `<div class = "file"></div>`;
    const $ele = $(template);
    $ele.text(file.name);
    $view.append($ele);
    
    $ele.on('click', () => {
      console.log($ele.text());
      FirebaseDB.downloadFile(auth.currentUser);
    });
    
    return this;
  }
  
  $input.on('change', function (e) {
    
    $progress.css('width', 0);
    console.log('dd', e.target.files[0]);
    // FirebaseApi.uploadFileData(e.target.files);
    
    // FirebaseApi.uploadFileData(e.target.files[0]);
  });
  
  $readFile.on('click', function () {
    FirebaseApi.readFileData();
  });
  
  
  $drop.on('dragenter', function (e) {
    e.stopPropagation();
    e.preventDefault();
    
    $drop.css('border', "2px solid red");
  });
  
  $drop.on('dragleave', function (e) {
    e.stopPropagation();
    e.preventDefault();
    
    $drop.css('border', "2px solid blue");
  });
  
  $drop.on('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    
    $drop.css('border', "2px solid green");
  });
  
  $drop.on('drop', function (e) {
    e.preventDefault();
    const files = e.originalEvent.dataTransfer.files;
    
    // FirebaseApi.uploadFileData(files);
    console.log('dd', e.target.files[0]);
    
    
  });
  
  
};