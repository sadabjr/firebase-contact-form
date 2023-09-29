import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBM-0E4KNDX-5bAK_A6RFUBRoRdhhJB4jc",
  authDomain: "contact-form-cd404.firebaseapp.com",
  databaseURL: "https://contact-form-cd404-default-rtdb.firebaseio.com",
  projectId: "contact-form-cd404",
  storageBucket: "contact-form-cd404.appspot.com",
  messagingSenderId: "934491497258",
  appId: "1:934491497258:web:ca1065f52060915914f453"
};

const app = initializeApp(firebaseConfig);

export const database = getAuth(app)