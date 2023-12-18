import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAulA77ZZA2RpgMpiHcOl4C6xX9yh9wHEs",
  authDomain: "skillconnect-5ae17.firebaseapp.com",
  projectId: "skillconnect-5ae17",
  storageBucket: "skillconnect-5ae17.appspot.com",
  messagingSenderId: "818118570252",
  appId: "1:818118570252:web:eedd079e28b39574f2d929",
  measurementId: "G-L2504RLK2B"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);