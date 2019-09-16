upload-file

path: /upload-file/client/src/firebase/index.js

import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref()

export {
  storage, storageRef, firebase as default
};