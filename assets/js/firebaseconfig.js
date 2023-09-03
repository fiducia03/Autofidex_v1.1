// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3MZUcLZ8LVERvqcPGrhHDw5CI3q4z97s",
    authDomain: "autofidex-back-end.firebaseapp.com",
    projectId: "autofidex-back-end",
    storageBucket: "autofidex-back-end.appspot.com",
    messagingSenderId: "822620956016",
    appId: "1:822620956016:web:21647b6b4cd34ff79ddbb5",
    measurementId: "G-4P31Z67WBV",

};


// Initialize Firebase + Export in WIndow
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service + Export in WIndow
const db = getDatabase();


// Export 
module.exports = ref, set, db, analytics;
