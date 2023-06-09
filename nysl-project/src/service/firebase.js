import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "project-nysl-d0ad6.firebaseapp.com/",
  databaseURL: "https://project-nysl-d0ad6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-nysl-d0ad6",
  storageBucket: "project-nysl-d0ad6.appspot.com",
  appId: "project-nysl-d0ad6",
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();

export const storage = getStorage(app);

/* 
export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  return auth.signOut();
}; */