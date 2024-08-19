import {getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD72aVBkr3zpOBgp0icAIWX5e9m79To09M",
    authDomain: "chat-with-pdf-fa335.firebaseapp.com",
    projectId: "chat-with-pdf-fa335",
    storageBucket: "chat-with-pdf-fa335.appspot.com",
    messagingSenderId: "754280396088",
    appId: "1:754280396088:web:20bb20de212491a4563dcd"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app)
const storage = getStorage(app)

export {db, storage}
