import firebase from "firebase";

// Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyBb9PMc5-aBqMGBMXwVEuO4y3VAG9U4kIM",
  authDomain: "menadotdev.firebaseapp.com",
  databaseURL: "https://menadotdev.firebaseio.com",
  projectId: "menadotdev",
  storageBucket: "menadotdev.appspot.com",
  messagingSenderId: "429073848493",
  appId: "1:429073848493:web:bf7432059207444d",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
