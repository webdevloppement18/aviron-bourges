import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw65sVmeQUKJb1rabJJAS4TA3u73qHa1M",
  authDomain: "bourges-5e395.firebaseapp.com",
  projectId: "bourges-5e395",
  storageBucket: "bourges-5e395.firebasestorage.app",
  messagingSenderId: "1026992624244",
  appId: "1:1026992624244:web:40a49ca9f807533c703721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export  default app;