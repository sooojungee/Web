var config = {
  apiKey: "AIzaSyC5CkychCxorVQPC4-J4LrAjL7vbiCMusQ",
  authDomain: "drivesystem-d2dfd.firebaseapp.com",
  databaseURL: "https://drivesystem-d2dfd.firebaseio.com",
  projectId: "drivesystem-d2dfd",
  storageBucket: "drivesystem-d2dfd.appspot.com",
  messagingSenderId: "750997686378"
};
firebase.initializeApp(config);


console.log(firebase);


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


const FirebaseApi = new function () {
  auth.onAuthStateChanged((user) => {
    // 현재 사용자를 가져올 때 Auth 개체가 중간 단계(초기화 등)에 있지 않도록 할 수 있습니다.
    
    if (authStateChangeEvent !== null) {
      authStateChangeEvent(user);
    }
  });
  
  let authStateChangeEvent = null;
  /**
   * @param callback {Function}
   */
  this.onAuthStateChange = (callback) => {
    authStateChangeEvent = callback;
  };
  
  this.signOut = () => {
    auth.signOut().then((ret) => {
      console.log(ret);
    });
  };
  
  this.signIn = async () => {
    
    // auth provider
    // 버튼일 클릭되면 아래 로그인 함수를 수행한다.
    //
    // Promise
    // 성공을 했을경우 then,
    // 실패를 했을 경우 catch
    //
    // Es6 -> async await
    // babel , webpack, babel-preset
    //
    // const ret = await auth.signInWithPopup(provider);
    
    
    auth.signInWithPopup(provider).then(function (result) {
      
      /// 로그인 창 띄워줌
      
      var token = result.credential.accessToken;
      var user = result.user;
      // console.log(user);
      console.log(auth.currentUser);
      // 현재 로그인한 유저
      //todo
      
      
    }).catch(function (error) {
      console.error(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      // ...
    });
  };
  return this;
};


console.log(auth.currentUser);

FirebaseApi.onAuthStateChange(async user => {
  console.log(user);
  if (user) {
    
    // Firebase에 대한 로직만 처리해야한다/
    
    // 틀린거야 아래쪽에 버튼을 제어하는거
    $('#loginButton').css('display', 'none');
    $('#logoutButton').css('display', 'block');
    // User is signed in.
    
    
    // Promise
    //
    // const userInfo = await db.allocUserInfo(info);
    // // 실패 체크
    //
    // const messageInfo = await messageDb.call();
    // //
    //
    //
    //
    //
    // db.allocUserInfo(info, function(){
    //     // todo login ... t
    //
    //     messageDb.call('message', function(){ // todo (2)
    //
    //     }) // todo  (1)
    // })
  } else {
    $('#loginButton').css('display', 'block');
    $('#logoutButton').css('display', 'none');
    // No user is signed in.
  }
});
// UI Control, logic  분리


$('#loginButton').on('click', FirebaseApi.signIn);
$('#logoutButton').on('click', FirebaseApi.signOut);

//
// function test() {
//   wait(2000, () => {
//     console.log('log!!!!');
//     wait(2000, () => {
//       console.log('log!!!!');
//       wait(2000, () => {
//         console.log('log!!!!');
//         wait(2000, () => {
//           console.log('log!!!!');
//         })
//       })
//     })
//   })
// }
//
// function wait(ms, callback) {
//   setTimeout(callback, ms);
// }


async function testAsync() {
  
  
  try {
    await waitPromise(2000);
    console.log('1!!!@#!@#!@#');
    // UI 변경
    
    await waitPromise(2000);
    console.log('2!!!@#!@#!@#');
    
    await waitPromise(2000);
    console.log('3!!!@#!@#!@#');
  } catch (e) {
    console.error(e);
    // 로그인 에러 처리
  }
}

function waitPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      // reject({error: 'wait error'});
    }, ms);
  });
}

testAsync();