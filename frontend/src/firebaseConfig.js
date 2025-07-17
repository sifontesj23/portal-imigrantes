import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5ZRpWmoe87hg-KqAz9wW7eN2hL2hRLWE",
  authDomain: "portal-imigrantes-tcc.firebaseapp.com",
  projectId: "portal-imigrantes-tcc",
  storageBucket: "portal-imigrantes-tcc.appspot.com",
  messagingSenderId: "48556450003",
  appId: "1:48556450003:web:22cbe06f594d17c981f426"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
