// Firebase project configuration for the Kent County Budget Priority Simulator.
//
// This object is safe to expose publicly in client-side code — it only tells
// the app which Firebase project to talk to, the same way a database
// hostname isn't a secret on its own. Access control is enforced entirely by
// Firestore Security Rules (configured in the Firebase console/CLI), not by
// keeping this config hidden. Never rely on hiding this file as a security
// measure — lock down access with security rules instead.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDz3dl4Rd1u7gFd6kjPoFL4PHu--5zX6BE",
  authDomain: "kent-county-budget-sim.firebaseapp.com",
  projectId: "kent-county-budget-sim",
  storageBucket: "kent-county-budget-sim.firebasestorage.app",
  messagingSenderId: "1066684460819",
  appId: "1:1066684460819:web:ab54b6fe73c2d55394b4e6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
