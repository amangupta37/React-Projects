import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB6J2E2HxZaKi6y1LisJlEgp1Mwqq1AaLw",
  authDomain: "bloggingapp-12c34.firebaseapp.com",
  projectId: "bloggingapp-12c34",
  storageBucket: "bloggingapp-12c34.appspot.com",
  messagingSenderId: "873599162218",
  appId: "1:873599162218:web:7e37544957f9159795b713",
});

export const firestore = firebase.firestore();

window.firebase = firebase;

export default app;
