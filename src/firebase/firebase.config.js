// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { Logger, LogLevel } from '@firebase/logger';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8t5p8sr1A8niFim8O6pUvC6FPQQiIwVc",
  authDomain: "webapp-e88e5.firebaseapp.com",
  projectId: "webapp-e88e5",
  storageBucket: "webapp-e88e5.appspot.com",
  messagingSenderId: "692636563746",
  appId: "1:692636563746:web:988bf2f5b020ab8fbf8d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;