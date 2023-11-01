"use strict"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, browserLocalPersistence, setPersistence} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth  
const auth = getAuth(app);

// Export firestore
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence)


export { auth, db };