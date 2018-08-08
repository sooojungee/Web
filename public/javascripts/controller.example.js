const UIController = new function(){
  
  const $signIn = $('#loginButton');
  const $signOut = $('#logoutButton');
  
  $signIn.on('click', FirebaseApi.signIn);
  $signOut.on('click', FirebaseApi.signOut);
  
  FirebaseApi.setOnAuthStateChanged((u)=>{
    if(!_.isNil(u)){
      $signIn.css('display' , 'none');
      $signOut.css('display', 'block');
    }
    else {
      $signIn.css('display' , 'block');
      $signOut.css('display', 'none');
    }
  });
  
};