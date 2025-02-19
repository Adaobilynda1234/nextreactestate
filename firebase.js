// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-estate-95c0c.firebaseapp.com",
  projectId: "next-estate-95c0c",
  storageBucket: "next-estate-95c0c.firebasestorage.app",
  messagingSenderId: "304011676304",
  appId: "1:304011676304:web:5a5a0c09d791a99b7e6615",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
