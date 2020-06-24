import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDyGC_SBb3rKwr9aEFtjdbPFI5yOpCeODg",
  authDomain: "juazeirolivre-3924b.firebaseapp.com",
  databaseURL: "https://juazeirolivre-3924b.firebaseio.com",
  projectId: "juazeirolivre-3924b",
  storageBucket: "juazeirolivre-3924b.appspot.com",
  messagingSenderId: "404100874604",
  appId: "1:404100874604:web:8732efb0a73b528d2ef349",
  measurementId: "G-3L0VYJF8QR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
