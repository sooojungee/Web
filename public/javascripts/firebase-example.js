var config = {
  apiKey: "AIzaSyC5CkychCxorVQPC4-J4LrAjL7vbiCMusQ",
  authDomain: "drivesystem-d2dfd.firebaseapp.com",
  databaseURL: "https://drivesystem-d2dfd.firebaseio.com",
  projectId: "drivesystem-d2dfd",
  storageBucket: "drivesystem-d2dfd.appspot.com",
  messagingSenderId: "750997686378"
};
firebase.initializeApp(config);


//
// // Initialize Cloud Firestore through Firebase


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();


const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);


const FirebaseApi = new function () {
  auth.onAuthStateChanged((user) => {
    
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
      console.log('logout', ret);
    });
  };
  
  this.signIn = async () => {
    
    auth.signInWithPopup(provider).then(function (result) {
      
      var token = result.credential.accessToken;
      var user = result.user;
      // console.log(user);
      // console.log('signIn', auth.currentUser);
      
    }).catch(function (error) {
      console.error(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  };
  return this;
};


let userInfo = [];
FirebaseApi.onAuthStateChange(async user => {
  
  if (user != null) {
    // if (userInfo.includes(user.uid))
    //   console.log(user.email);
    // else
    //   console.log('sss');

    if (!userInfo.includes(user.uid)) {
      let info = {
        uid: user.uid,
        info: {
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          creationTime: user.creationTime,
          lastSignInTime: user.lastSignInTime

        }
      };

      userInfo.push(info);
      sendInfo(user);
    }
    else
      readInfo(user);
    
  }
  
  if (user) {
    
    $('#loginButton').css('display', 'none');
    $('#logoutButton').css('display', 'block');
    
  } else {
    $('#loginButton').css('display', 'block');
    $('#logoutButton').css('display', 'none');
    
  }
});


$('#loginButton').on('click', FirebaseApi.signIn);
$('#logoutButton').on('click', FirebaseApi.signOut);

//
// async function testAsync() {
//
//
//   try {
//     await waitPromise(2000);
//     console.log('1!!!@#!@#!@#');
//     // UI 변경
//
//     await waitPromise(2000);
//     console.log('2!!!@#!@#!@#');
//
//     await waitPromise(2000);
//     console.log('3!!!@#!@#!@#');
//   } catch (e) {
//     console.error(e);
//     // 로그인 에러 처리
//   }
// }
//
// function waitPromise(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }
//
// testAsync();

function sendInfo(user) {
  
  db.collection("users").doc(user.uid).set({
    displayName: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
    creationTime: user.metadata.creationTime,
    lastSignInTime: user.metadata.lastSignInTime
  })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}

function readInfo(user) {
  
  var docRef = db.collection("users").doc(user.uid);
  
  docRef.get().then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
  
}