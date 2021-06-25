import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSjts7pihbbpyNmbG22wGYalpRiTaJjX8",
  authDomain: "loginauthentication-cf743.firebaseapp.com",
  projectId: "loginauthentication-cf743",
  storageBucket: "loginauthentication-cf743.appspot.com",
  messagingSenderId: "358384487649",
  appId: "1:358384487649:web:8479e09a32b3bbfbe93ba0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
