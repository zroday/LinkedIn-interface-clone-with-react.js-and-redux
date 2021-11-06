import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7vqYbYWnItPjVy313IjAdEPQnAmlEEqs",
  authDomain: "linkedin-clone-9b1e9.firebaseapp.com",
  projectId: "linkedin-clone-9b1e9",
  storageBucket: "linkedin-clone-9b1e9.appspot.com",
  messagingSenderId: "813700761132",
  appId: "1:813700761132:web:f4265bcdf45181e0897389",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
