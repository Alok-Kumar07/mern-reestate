// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-auth.firebaseapp.com",
  projectId: "mern-estate-auth",
  storageBucket: "mern-estate-auth.appspot.com",
  messagingSenderId: "714124537649",
  appId: "1:714124537649:web:15efdcdf88e6719d4bca10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);