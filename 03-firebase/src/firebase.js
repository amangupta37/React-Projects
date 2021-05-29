import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDnIUptnRteLCFyJYwW4PTim6F6yH0iwDw",
  authDomain: "blogginga-e1256.firebaseapp.com",
  projectId: "blogginga-e1256",
  storageBucket: "blogginga-e1256.appspot.com",
  messagingSenderId: "261047858211",
  appId: "1:261047858211:web:63b173d5d5163b29adad96",
});

export const firestore = firebase.firestore();

window.firebase = firebase;

export default app;
