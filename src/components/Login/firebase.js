// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9RY267I6UAWCIJdzirkBCEcKKdF57UIc",
  authDomain: "burj-al-arab-auth-aa3e9.firebaseapp.com",
  projectId: "burj-al-arab-auth-aa3e9",
  storageBucket: "burj-al-arab-auth-aa3e9.appspot.com",
  messagingSenderId: "264741543174",
  appId: "1:264741543174:web:5191ed2ea9b1c500451287"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);