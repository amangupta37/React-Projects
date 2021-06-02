import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAhrw7RZrL2xZ-lMBBFRD4zxHubAzR7c8M",
  authDomain: "bloggingapp-46861.firebaseapp.com",
  projectId: "bloggingapp-46861",
  storageBucket: "bloggingapp-46861.appspot.com",
  messagingSenderId: "1045736793093",
  appId: "1:1045736793093:web:1edd203ad5e5737539686c",
});

export const firestore = firebase.firestore();

window.firebase = firebase;

export default app;
