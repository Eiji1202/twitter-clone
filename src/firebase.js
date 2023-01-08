import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGsXu_pDZbc8Pv85RnEXK-ifwFDcemLQ0",
  authDomain: "twitter-clone-f54e3.firebaseapp.com",
  projectId: "twitter-clone-f54e3",
  storageBucket: "twitter-clone-f54e3.appspot.com",
  messagingSenderId: "381761086115",
  appId: "1:381761086115:web:9f90df525887ea43609516",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
