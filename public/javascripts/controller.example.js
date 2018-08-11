const UIController = new function () {
  
  const $signIn = $('#loginButton');
  const $signOut = $('#logoutButton');
  const $input = $('input');
  const $readFile = $('#read');
  const $progress = $('.progress');
  
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
  
  
  $input.on('change', function (e) {
    
    $progress.css('width', 0);
    console.log('dd', e.target.files);
    FirebaseApi.uploadFileData(e.target.files);
    
    // FirebaseApi.uploadFileData(e.target.files[0]);
  });
  
  $readFile.on('click', function () {
    FirebaseApi.readFileData();
  });
  
  
  const $drop = $('.drag-zone');
  
  $drop.on('dragenter', function(e){
    e.stopPropagation();
    e.preventDefault();
    
    $drop.css('border', "2px solid red");
  });
  
  $drop.on('dragleave', function(e){
    e.stopPropagation();
    e.preventDefault();
    
    $drop.css('border', "2px solid blue");
  });
  
  $drop.on('dragover', function(e){
    e.stopPropagation();
    e.preventDefault();
    
    $drop.css('border', "2px solid green");
  });
  
  $drop.on('drop', function(e){
    e.preventDefault();
    const files = e.originalEvent.dataTransfer.files;
    console.log(files);
    
    FirebaseApi.uploadFileData(files);
  
  
  });
  
};