import firebase from 'firebase';
import 'firebase/storage'
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import "firebase/messaging";
import "firebase/performance";


export const app = firebase.initializeApp({
    apiKey: "AIzaSyDgjlb-xqFxHMznj6ArKQmlT3dkpezpFek",
    authDomain: "image-gallery-4ed93.firebaseapp.com",
    databaseURL: "https://image-gallery-4ed93-default-rtdb.firebaseio.com",
    projectId: "image-gallery-4ed93",
    storageBucket: "image-gallery-4ed93.appspot.com",
    messagingSenderId: "574070553359",
    appId: "1:574070553359:web:08d3594ad385c40da21c7a",
    measurementId: "G-RHJWKN1EJR"
  });
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();
const firestore = firebase.firestore();
let messaging = null;
try {
  if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();
    messaging.usePublicVapidKey("your publicVapidKey here");
  }
} catch (e) {}
const perf = firebase.performance();

export { firebase, auth, storage, functions, firestore, messaging };