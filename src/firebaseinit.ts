// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCw6lKUjoZKDSdk4F5tDBzpVUFunVOKpxQ",

  authDomain: "sana-668c1.firebaseapp.com",

  projectId: "sana-668c1",

  storageBucket: "sana-668c1.appspot.com",

  messagingSenderId: "218803894089",

  appId: "1:218803894089:web:7f61e0d901a4be8bda8c98",

  measurementId: "G-MP4NTDFELQ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
