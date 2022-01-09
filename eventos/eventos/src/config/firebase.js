import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJLMnPucsxiUPRsPTdrKUvMpkSWTiz5jc",
  authDomain: "eventos-4b5ca.firebaseapp.com",
  projectId: "eventos-4b5ca",
  storageBucket: "eventos-4b5ca.appspot.com",
  messagingSenderId: "462244867536",
  appId: "1:462244867536:web:cbddb29d0380431b6f1dd5"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);

//const db = firebaseApp.firestore();
//const auth = firebase.auth();

//export { auth, db };