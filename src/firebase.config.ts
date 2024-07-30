// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVRJ3qSOoezVNRYxVTbVsDJRDpWpNHCbc",
  authDomain: "knust-practicum.firebaseapp.com",
  projectId: "knust-practicum",
  storageBucket: "knust-practicum.appspot.com",
  messagingSenderId: "732616562523",
  appId: "1:732616562523:web:b75f4b8ef3bcbca386ac7e",
  measurementId: "G-GW2B5BZV9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);