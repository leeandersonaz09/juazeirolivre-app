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
  apiKey: "AIzaSyC5v3m_YmeKBbm-18QJtml1mBQR5lx-hiY",
  authDomain: "juazeirolivreapp.firebaseapp.com",
  databaseURL: "https://juazeirolivreapp.firebaseio.com",
  projectId: "juazeirolivreapp",
  storageBucket: "juazeirolivreapp.appspot.com",
  messagingSenderId: "96007020999",
  appId: "1:96007020999:web:ea4b2ce923743cd4f9f9e2",
  measurementId: "G-XMB4HW6972"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
