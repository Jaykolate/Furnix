// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAEJ2OlyaKM3F74LC9-tyPUMdFIvIT1I0I",

  authDomain: "furnix-63f75.firebaseapp.com",

  projectId: "furnix-63f75",

  storageBucket: "furnix-63f75.firebasestorage.app",

  messagingSenderId: "1083767598996",

  appId: "1:1083767598996:web:a09663caa989075a18e981",

  measurementId: "G-TSHD16PRYM"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);