// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-k0q7gc17fDWLfK7k0U-mtwbkLdTc9M0",
  authDomain: "netflixgpt-bd5e7.firebaseapp.com",
  projectId: "netflixgpt-bd5e7",
  storageBucket: "netflixgpt-bd5e7.appspot.com",
  messagingSenderId: "267776424397",
  appId: "1:267776424397:web:7ecbb144c27617d72b6c84",
  measurementId: "G-0GZ3JFCWXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
