import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHyqOoe5qAm7QEv53z63zQoZM154DAHpM",
  authDomain: "blog-web-app-fe35a.firebaseapp.com",
  projectId: "blog-web-app-fe35a",
  storageBucket: "blog-web-app-fe35a.firebasestorage.app",
  messagingSenderId: "261050510835",
  appId: "1:261050510835:web:d03979324b4eef74293686",
  measurementId: "G-341Y98Q46Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
