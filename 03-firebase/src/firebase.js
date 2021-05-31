import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCEcq2EesvrB8YUCiNfToZvdC29VEKhFF8",
  authDomain: "bloggingapp-73bb2.firebaseapp.com",
  projectId: "bloggingapp-73bb2",
  storageBucket: "bloggingapp-73bb2.appspot.com",
  messagingSenderId: "887233237579",
  appId: "1:887233237579:web:6fc0171cf3a11696c473ce",
});

export const firestore = firebase.firestore();

window.firebase = firebase;

export default app;
