import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS_l3oexIaqrD7-D_Y9oqxB5kE0-DtLQ8",
  authDomain: "okoa-gari.firebaseapp.com",
  projectId: "okoa-gari",
  storageBucket: "okoa-gari.firebasestorage.app",
  messagingSenderId: "489088611228",
  appId: "1:489088611228:web:73f7557f0a176b39d8ce59",
  measurementId: "G-RD7BLQBQE5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };

//4.51