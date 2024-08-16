import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
 } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyA3QKPcW4KTzrohvPuZSpB-xikGE49Cgoo",
  authDomain: "bloging-app-470e5.firebaseapp.com",
  projectId: "bloging-app-470e5",
  storageBucket: "bloging-app-470e5.appspot.com",
  messagingSenderId: "905040852177",
  appId: "1:905040852177:web:bb638a12a14d9c0db101f0",
  measurementId: "G-EMG95BMFTN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);

export{
  auth,createUserWithEmailAndPassword,signInWithEmailAndPassword
}