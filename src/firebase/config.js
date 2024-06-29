import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDswZuwkF9b-WsaubycCx86hn6VvPnQww",
  authDomain: "proyecto-final-react-f9b3e.firebaseapp.com",
  projectId: "proyecto-final-react-f9b3e",
  storageBucket: "proyecto-final-react-f9b3e.appspot.com",
  messagingSenderId: "257089651046",
  appId: "1:257089651046:web:7bcfe3d2f65d07b3dd48a7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
