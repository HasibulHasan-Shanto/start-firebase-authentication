// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEs7sWpE8nP7jl2Dksuo9SOlsErO52feY",
    authDomain: "start-firebase-authentic-d2825.firebaseapp.com",
    projectId: "start-firebase-authentic-d2825",
    storageBucket: "start-firebase-authentic-d2825.firebasestorage.app",
    messagingSenderId: "180930959696",
    appId: "1:180930959696:web:f751cd3c84474fc970f455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)