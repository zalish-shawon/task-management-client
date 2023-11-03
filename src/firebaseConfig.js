// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpxlArC9ZDFq5uWDtCnp4zeURRt1lqlA8",
  authDomain: "task-management-b3c45.firebaseapp.com",
  projectId: "task-management-b3c45",
  storageBucket: "task-management-b3c45.appspot.com",
  messagingSenderId: "993177179084",
  appId: "1:993177179084:web:d857d9bd74791ceca28369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;