// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZFSd6bm2Otjq4l4gz0RQTtorOX1Fpn7Q",
  authDomain: "login-page-3cabe.firebaseapp.com",
  projectId: "login-page-3cabe",
  storageBucket: "login-page-3cabe.appspot.com",
  messagingSenderId: "153078152377",
  appId: "1:153078152377:web:84d1c01bc1fff2ed4b6f68",
  measurementId: "G-PZJBZ17JMH"
};

// Initialize Firebase                                                      
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);