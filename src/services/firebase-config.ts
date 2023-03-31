import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD4-TM8ShM5WZpWuz71XlqF5KjKweDRwIU",
  authDomain: "basecode-33971.firebaseapp.com",
  projectId: "basecode-33971",
  storageBucket: "basecode-33971.appspot.com",
  messagingSenderId: "422926512042",
  appId: "1:422926512042:web:5a22893771d963fff505d3",
  measurementId: "G-18SRPN9EY8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

