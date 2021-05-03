import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "jobbox-1b476.firebaseapp.com",
  projectId: "jobbox-1b476",
  storageBucket: "jobbox-1b476.appspot.com",
  messagingSenderId: "297885912994",
  appId: "1:297885912994:web:5d45c0abdb121cea2c6cfb",
  measurementId: "G-QBELHX3M89",
};

!firebase.apps.length && firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const createUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const signInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const sendVerification = () => auth.currentUser.sendEmailVerification();