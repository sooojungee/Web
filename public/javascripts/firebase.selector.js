const config = {
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
const storage = firebase.storage();
const storageRef = storage.ref();


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
  },
  
  // 한 개짜리
  uploadFile: async (uid, file) => {
    const data = {
      uid: uid,
      name: file.name,
      size: file.size,
      lastModifiedDate: file.lastModifiedDate,
      uploadDate: file.lastModifiedDate
    };
    const fileId = new Date().getTime().toString();
    
    return await store.collection("files").doc(fileId).set(data);
    
  },
  
  
  // 두 개짜리
  
  // uploadFile: async (uid, file) => {
  //   const data = {
  //     uid: uid,
  //     name: file.name,
  //     size: file.size,
  //     lastModifiedDate: file.lastModifiedDate,
  //     uploadDate: file.lastModifiedDate
  //   };
  //   const fileId = new Date().getTime().toString();
  //
  //   return await store.collection("files").doc(fileId).set(data);
  //
  // },
  
  readFile: async (id) => {
    
    const files = [];
    // return await store.collection("files").where("uid", "==", id).get()
    await store.collection("files").where("uid", "==", id)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          files.push(doc.data());
          // console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    
    return files;
  }
  
};

const FirebaseApi = new function () {
  
  let listener = null;
  let progressListener = null;
  
  function setOnProgressListener(callback) {
    progressListener = callback;
  }
  
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
  
  // 하나씩
  // async function uploadFileData(file) {
  //
  //   const user = auth.currentUser;
  //   const ref = storageRef.child(file.name);
  //   ref.put(file).then(function (snapshot) {
  //     console.log('Uploaded a blob or file!');
  //   });
  //   await FirebaseDB.uploadFile(user.uid, file);
  // }
  
  //여러개 한번에 보내는거
  // 1.
  // async function uploadFileData(files) {
  //
  //   const user = auth.currentUser;
  //   for (let i = 0; i < files.length; i++) {
  //     const ref = storageRef.child(files[i].name);
  //
  //     await ref.put(files[i]).then(function (snapshot) {
  //       console.log('Uploaded a blob or file!');
  //     });
  //
  //
  //     await FirebaseDB.uploadFile(user.uid, files[i]);
  //   }
  // }
  
  
  //2.
  async function uploadFileData(files) {
    
    const user = auth.currentUser;
    
    for (let i = 0; i < files.length; i++) {
      const ref = storageRef.child(files[i].name).put(files[i]);
      await ref.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function (error) {
      }, function () {
        ref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
          progressListener(files.length - i);
        });
      });
      
      await FirebaseDB.uploadFile(user.uid, files[i]);
    }
  }
  
  async function readFileData() {
    
    const user = auth.currentUser;
    const a = await FirebaseDB.readFile(user.uid);
    console.log(a);
  }
  
  return {
    signIn: async () => await auth.signInWithPopup(provider),
    signOut: async () => await auth.signOut(),
    setOnAuthStateChanged,
    setOnProgressListener,
    uploadFileData,
    readFileData
  };
  
  
};