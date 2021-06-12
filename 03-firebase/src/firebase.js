import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDKxUb4hfAh0rUmB9gGTDljHEWFVws1qXM",
  authDomain: "bloggingapp-17751.firebaseapp.com",
  projectId: "bloggingapp-17751",
  storageBucket: "bloggingapp-17751.appspot.com",
  messagingSenderId: "595612801547",
  appId: "1:595612801547:web:7c87ca2d9029e42165450e",
});

export const firestore = firebase.firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

window.firebase = firebase;

export default app;
