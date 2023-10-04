// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr9qckDLKJbeeWNngVUtVSvFX-24PHwGY",
  authDomain: "fir-crud-9052d.firebaseapp.com",
  projectId: "fir-crud-9052d",
  storageBucket: "fir-crud-9052d.appspot.com",
  messagingSenderId: "65719233720",
  appId: "1:65719233720:web:ee52cb939536e14fd1584d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);