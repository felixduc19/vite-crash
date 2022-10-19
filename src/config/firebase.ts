// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRi_Gz6B3ZOLSOwm7VqtAk1usyp_NZ4Is",
  authDomain: "base-project-3f0ae.firebaseapp.com",
  projectId: "base-project-3f0ae",
  storageBucket: "base-project-3f0ae.appspot.com",
  messagingSenderId: "281818332923",
  appId: "1:281818332923:web:85f57e539cf51f22947a5e",
  measurementId: "G-38JD3367QY",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const messaging = getMessaging(app);

export { auth, messaging };
