import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0aLaX_hoZ-Meb6n9tXSa3cr2llMjxH6c",
  authDomain: "auth-login-4c5c4.firebaseapp.com",
  projectId: "auth-login-4c5c4",
  storageBucket: "auth-login-4c5c4.appspot.com",
  messagingSenderId: "299934118012",
  appId: "1:299934118012:web:cc761a550a91ca7e2d19f9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
