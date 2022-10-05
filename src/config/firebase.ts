// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZeSmD-QMLi63zDwk6HvRHlbpZuryq9XI",
  authDomain: "weco-42a6b.firebaseapp.com",
  projectId: "weco-42a6b",
  storageBucket: "weco-42a6b.appspot.com",
  messagingSenderId: "156929777373",
  appId: "1:156929777373:web:83a2cfa486f01fef858534",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
