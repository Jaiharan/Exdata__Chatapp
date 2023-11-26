import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDAG7SY0_CrWzAbl7F86dnM_c5vvFGPslE",
  authDomain: "exdata-8cc69.firebaseapp.com",
  projectId: "exdata-8cc69",
  storageBucket: "exdata-8cc69.appspot.com",
  messagingSenderId: "679754215070",
  appId: "1:679754215070:web:64ee0f9bac64a1030f558f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


