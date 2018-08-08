var config = {
  apiKey: "AIzaSyC5CkychCxorVQPC4-J4LrAjL7vbiCMusQ",
  authDomain: "drivesystem-d2dfd.firebaseapp.com",
  databaseURL: "https://drivesystem-d2dfd.firebaseio.com",
  projectId: "drivesystem-d2dfd",
  storageBucket: "drivesystem-d2dfd.appspot.com",
  messagingSenderId: "750997686378"
};
firebase.initializeApp(config);


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const store = firebase.firestore();

const settings = {timestampsInSnapshots: true};
store.settings(settings);


const FirebaseDB = {
  
  createUser: async (user) => {
    const data = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: new Date().getTime(),
      signAt: new Date().getTime(),
      
    };
    
    return await store.collection("users").doc(user.uid).set(data);
  },
  
  signUser: async (user) => {
    const data = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      signAt: new Date().getTime(),
      
    };
    
    return await store.collection("users").doc(user.uid).update(data);
    
  },
  
  readUser: async (uid) => {
    const refUser = store.collection("users").doc(uid);
    
    const doc = await refUser.get();
    if (doc.exists) return doc.data();
    else return null;
  }
  
};

const FirebaseApi = new function () {
  
  let listener = null;
  
  function setOnAuthStateChanged(callback) {
    listener = callback;
  }
  
  auth.onAuthStateChanged(async (user) => {
    if (_.isNil(user)) {
      if (!_.isNil(listener)) listener(null);
      return;
    }
    
    let u = await FirebaseDB.readUser(user.uid);
    if (_.isNil(u)) {
      await FirebaseDB.createUser(user);
      u = await FirebaseDB.readUser(user.uid);
    }
    else {
      await FirebaseDB.signUser(user);
      u = await FirebaseDB.readUser(user.uid);
    }
    
    if (!_.isNil(listener)) listener(u);
    
  });
  
  return {
    signIn: async () => await auth.signInWithPopup(provider),
    signOut: async () => await auth.signOut(),
    setOnAuthStateChanged,
  };
  
  
};