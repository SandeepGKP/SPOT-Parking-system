// Firebase configuration
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBo7DoqRpcyG24zCmEpsfvtthn9ASEdPyU",
  authDomain: "sandeepfirstp.firebaseapp.com",
  databaseURL: "https://sandeepfirstp-default-rtdb.firebaseio.com",
  projectId: "sandeepfirstp",
  storageBucket: "sandeepfirstp.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue };
