import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0SXzMrJ4HrLSEwWe4IieRip_iY9MyEPQ",
  authDomain: "whatsapp-clone-af5b7.firebaseapp.com",
  projectId: "whatsapp-clone-af5b7",
  storageBucket: "whatsapp-clone-af5b7.appspot.com",
  messagingSenderId: "14676745860",
  appId: "1:14676745860:web:67b9fedd83fe6b54e46cd1",
  measurementId: "G-X6VTQYR4YB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
