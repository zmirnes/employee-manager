// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDbTDWyVmGmFgXlNoz4-WoQimJIVqXSPLI",
  authDomain: "employeemanager-b0c0d.firebaseapp.com",
  projectId: "employeemanager-b0c0d",
  storageBucket: "employeemanager-b0c0d.appspot.com",
  messagingSenderId: "829459819842",
  appId: "1:829459819842:web:320c6270f423fe4ae4ecdb",
  databaseURL:
    "https://employeemanager-b0c0d-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;
