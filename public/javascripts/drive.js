var config = {
  apiKey: "AIzaSyC5CkychCxorVQPC4-J4LrAjL7vbiCMusQ",
  authDomain: "drivesystem-d2dfd.firebaseapp.com",
  databaseURL: "https://drivesystem-d2dfd.firebaseio.com",
  projectId: "drivesystem-d2dfd",
  storageBucket: "drivesystem-d2dfd.appspot.com",
  messagingSenderId: "750997686378"
};
firebase.initializeApp(config);


console.log('hi');

const auth = firebase.auth();

// 로그인 방법 정의 : auth provider

var provider = new firebase.auth.GoogleAuthProvider();


//jQuery에서 로그인 버튼이 클릭 되면 아래 함수를 수행한다.
const FirebaseAPI = new function () {
  
  auth.onAuthStateChanged(function (user) {
    // 1 로그인을 처리하는 주체
    // 유저 상태가 변경되면 무조건 불러진다. 유저가 없으면 없으면 안불러짐
    console.log(user);
    // firebase에 대한 로직만 처리한다.
    
    if (authStateChangeEvent !== null) {
      authStateChangeEvent(user);
    }
    
    // if (user) {
    //   // firebase에 대한 로직만 처리한다.
    //
    //   // 아래쪽 틀린거야 그래서
    //   $('#logoutButton').css('display', 'block');
    //   $('#loginButton').css('display', 'none');
    //   // User is signed in.
    // } else {
    //   $('#logoutButton').css('display', 'none');
    //   $('#loginButton').css('display', 'block');
    //   // No user is signed in.
    // }
  });
  
  let authStateChangeEvent = null;
  
  // @param callback {function}
  
  this.onAuthStateChange = (callback) => {
    authStateChangeEvent = callback;
  };
  
  this.signOut = () => {
    auth.signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
  };
  
  this.signIn = () => {
    // 2 로그인을 하는 주체
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user);
      
      // 로그인이 되었으면 currentUser이 생긴다. firebase에도 로그인했다고 생김 그 정보는 데이터베이스에 들어있지않음.
      
      console.log(auth.currentUser);
      // ...
    }).catch(function (error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  };
  
  return this;
  
};


///////////////////////////////////////////////////////////
FirebaseAPI.onAuthStateChange(user => {
  if (user) {
    
    $('#logoutButton').css('display', 'block');
    $('#loginButton').css('display', 'none');
    // User is signed in.
  } else {
    $('#logoutButton').css('display', 'none');
    $('#loginButton').css('display', 'block');
    // No user is signed in.
  }
});

$('#loginButton').on('click', FirebaseAPI.signIn);

$('#logoutButton').on('click', FirebaseAPI.signOut);
