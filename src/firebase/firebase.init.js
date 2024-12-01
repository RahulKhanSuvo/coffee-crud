// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7x1aRe9WE2bKxPQRxcxGzrA1P9awwRIE",
  authDomain: "coffee-crud-93dfb.firebaseapp.com",
  projectId: "coffee-crud-93dfb",
  storageBucket: "coffee-crud-93dfb.firebasestorage.app",
  messagingSenderId: "813389446506",
  appId: "1:813389446506:web:f9be8552a3d7d889d93913",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
