
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, query, where, getDocs, addDoc } =  require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARbqRJvQ6PgR44NV-dzRRZDYwcr0_2Qtk",
  authDomain: "learnup-69424.firebaseapp.com",
  projectId: "learnup-69424",
  storageBucket: "learnup-69424.firebasestorage.app",
  messagingSenderId: "744404591629",
  appId: "1:744404591629:web:f2de2aca770115d40d2144",
  measurementId: "G-PQ0RJSESR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
module.exports = { db, collection, query, where, getDocs, addDoc };
