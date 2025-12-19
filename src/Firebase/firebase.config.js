// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTgUnhlS43WgCrdsla-OFlIYQ7rfAV5_o",
  authDomain: "assignment9-c6435.firebaseapp.com",
  projectId: "assignment9-c6435",
  storageBucket: "assignment9-c6435.firebasestorage.app",
  messagingSenderId: "645430585230",
  appId: "1:645430585230:web:1f8fd09c42c73c59d026df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);