// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSZNnDirgniATagMv_o6zzevnpDJM-G_c",
  authDomain: "next-restaurant-11a1a.firebaseapp.com",
  projectId: "next-restaurant-11a1a",
  storageBucket: "next-restaurant-11a1a.appspot.com",
  messagingSenderId: "573761889651",
  appId: "1:573761889651:web:001e66c90a87e409fbd106",
  measurementId: "G-NHF4R2GZQ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
