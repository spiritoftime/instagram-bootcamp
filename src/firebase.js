// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkAp0bD8wbGvkgRAdwRSkIGWtbXIs-aF0",
  authDomain: "liangyi-rocket.firebaseapp.com",
  databaseURL:
    "https://liangyi-rocket-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "liangyi-rocket",
  storageBucket: "liangyi-rocket.appspot.com",
  messagingSenderId: "504261061112",
  appId: "1:504261061112:web:d2c250e0576a5602478e0d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database service and export the reference for other modules
export const database = getDatabase(firebaseApp);
