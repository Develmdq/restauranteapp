import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config";

initializeApp(firebaseConfig);

const firebaseApp = { db: getFirestore() };

export default firebaseApp;
