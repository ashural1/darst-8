import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2zZ7-3OnvKIB_ULbegHYysEpT_fyVZEc",
  authDomain: "mymarket-978e0.firebaseapp.com",
  projectId: "mymarket-978e0",
  storageBucket: "mymarket-978e0.appspot.com",
  messagingSenderId: "852533839517",
  appId: "1:852533839517:web:2afb86fd8d369f1d3e7674",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
