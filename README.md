upload-file

Document add image
https://firebase.google.com/docs/storage/web/upload-files?authuser=1

Document Delete image
https://firebase.google.com/docs/storage/web/delete-files?authuser=1

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