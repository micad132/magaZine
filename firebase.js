import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLSWsDLJqDyIxVMZE2zAMginRFBm_zskE",
  authDomain: "magazine-14972.firebaseapp.com",
  projectId: "magazine-14972",
  storageBucket: "magazine-14972.appspot.com",
  messagingSenderId: "867751473428",
  appId: "1:867751473428:web:85331874748e6886d61201",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const colref = collection(db, "Inventory");
const storage = getStorage();

export { auth, colref, storage };
