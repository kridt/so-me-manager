import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_firebase_apiKey,
  authDomain: process.env.NEXT_PUBLIC_firebase_authDomain,
  projectId: process.env.NEXT_PUBLIC_firebase_projectId,
  storageBucket: process.env.NEXT_PUBLIC_firebase_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_firebase_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_firebase_appId,
  measurementId: process.env.NEXT_PUBLIC_firebase_measurementId,
});

export const database = firebase.firestore(app);
export const auth = firebase.auth(app);
export default app;
