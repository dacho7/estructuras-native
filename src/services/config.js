import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyC6CPe4-yXnPIM_W5QcLBDpMnEvbGxIcX4",
  authDomain: "estructuras-app.firebaseapp.com",
  projectId: "estructuras-app",
  storageBucket: "estructuras-app.appspot.com",
  messagingSenderId: "320659154017",
  appId: "1:320659154017:web:63c7f6644a6deb54673620",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const AUTH = getAuth(app);
