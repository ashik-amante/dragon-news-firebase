// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_82_wvdISCIWfa0Vw3JVDUZVyfeRUOco",
  authDomain: "dragon-news-firebase-e0da3.firebaseapp.com",
  projectId: "dragon-news-firebase-e0da3",
  storageBucket: "dragon-news-firebase-e0da3.firebasestorage.app",
  messagingSenderId: "285938169863",
  appId: "1:285938169863:web:6ffbd7e4bf0f713d43d2a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth