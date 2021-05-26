import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCrtOWjZrqS6bCy4G0LAlXad6D-eejcbGc",
    authDomain: "spartans-b.firebaseapp.com",
    projectId: "spartans-b",
    storageBucket: "spartans-b.appspot.com",
    messagingSenderId: "499552594330",
    appId: "1:499552594330:web:b97b79e1783c3a8acdb223"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export { firebase, db, googleAuthProvider }