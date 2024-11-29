// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD92ENtP-69V1CVBTlr-JlBqA7BVeaWIp4",
  authDomain: "finalproject-91716.firebaseapp.com",
  projectId: "finalproject-91716",
  storageBucket: "finalproject-91716.appspot.com",
  messagingSenderId: "442606546915",
  appId: "1:442606546915:web:63d697fc56fe3fc3aabad6",
  measurementId: "G-2YPHB0XVP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)