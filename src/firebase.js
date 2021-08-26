import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCPsCOr0IEEMW5Lo3UxY4AvQ4kmwN-v_WA",
  authDomain: "fire-vue-e2f6b.firebaseapp.com",
  projectId: "fire-vue-e2f6b",
  storageBucket: "fire-vue-e2f6b.appspot.com",
  messagingSenderId: "937726927114",
  appId: "1:937726927114:web:0d9923404bdbdb0fce1af3"
};

firebase.initializeApp(firebaseConfig);

export const projectFirestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
