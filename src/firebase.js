import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDQ9_csXS4F9ipufQTK19LqiZuUhn58WLw",
  authDomain: "linkedin-clone-bda38.firebaseapp.com",
  projectId: "linkedin-clone-bda38",
  storageBucket: "linkedin-clone-bda38.appspot.com",
  messagingSenderId: "424697528814",
  appId: "1:424697528814:web:5ca2c264659c798b73ceff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };