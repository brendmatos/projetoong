// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU5mYWLGYUUBWXS3fq-YZn-CpEVDUtOAo",
  authDomain: "projeto-teste-13617.firebaseapp.com",
  databaseURL: "https://projeto-teste-13617-default-rtdb.firebaseio.com",
  projectId: "projeto-teste-13617",
  storageBucket: "projeto-teste-13617.firebasestorage.app",
  messagingSenderId: "609476732262",
  appId: "1:609476732262:web:14c34eaaa6e8b18ed514a7",
  measurementId: "G-7HVV9J31ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db} 