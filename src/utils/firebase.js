// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA32Rfel5gcZWMetc_cJZ2TiXfS9Wl7z3A",
  authDomain: "netflixgpt-190e4.firebaseapp.com",
  projectId: "netflixgpt-190e4",
  storageBucket: "netflixgpt-190e4.appspot.com",
  messagingSenderId: "490090824099",
  appId: "1:490090824099:web:9569b0ad0ecfd7c4e65a16",
  measurementId: "G-96STB2F47L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
