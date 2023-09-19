import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhxsE9_SZQugAyjCkx_RW4JLdU-po9wdI",
  authDomain: "fir-auth-4ff3c.firebaseapp.com",
  projectId: "fir-auth-4ff3c",
  storageBucket: "fir-auth-4ff3c.appspot.com",
  messagingSenderId: "125315412173",
  appId: "1:125315412173:web:1a7c86c764ecfa622bf984"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);