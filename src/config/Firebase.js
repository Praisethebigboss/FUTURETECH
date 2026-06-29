// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

let app;
let Auth;
let db;
let provider;
let storageRef;

try {
  app = initializeApp(firebaseConfig);
  Auth = getAuth(app);
  db = getFirestore(app);
  provider = new GoogleAuthProvider();
  storageRef = getStorage(app);
} catch (e) {
  console.warn("Firebase not configured — app running in demo mode");
}

export { Auth, db, provider, storageRef };
