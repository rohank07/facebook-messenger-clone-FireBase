import firebase from 'firebase';

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyBTWIhqYKswgz1FzJ7dGk9DPUgdg7Lft-A",
    authDomain: "facebook-messenger-cl-81fee.firebaseapp.com",
    projectId: "facebook-messenger-cl-81fee",
    storageBucket: "facebook-messenger-cl-81fee.appspot.com",
    messagingSenderId: "334238990469",
    appId: "1:334238990469:web:cf792478f64db83ad2e9ec",
    measurementId: "G-GLD5RWMEW6"
  });

const db = firebaseApp.firestore();


export  {db};