// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDsl_2KHsACvmDqKwXmWB_WOi5CzxhQrA",
  authDomain: "react-notes-31650.firebaseapp.com",
  projectId: "react-notes-31650",
  storageBucket: "react-notes-31650.appspot.com",
  messagingSenderId: "1065904914866",
  appId: "1:1065904914866:web:db79c65e6772503cd364ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
