// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYAYnbvPmyQCppE29sutd0LOwvviq0E6Q",
  authDomain: "netflix-gpt-50c03.firebaseapp.com",
  projectId: "netflix-gpt-50c03",
  storageBucket: "netflix-gpt-50c03.appspot.com",
  messagingSenderId: "814573500771",
  appId: "1:814573500771:web:2700c493891fa5da7bfb56",
  measurementId: "G-K971NQ5WM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();