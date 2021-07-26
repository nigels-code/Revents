import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCBPmJmOTXELifSfcdkBg0pdRokWVyESh8',
  authDomain: 'revents-b4db5.firebaseapp.com',
  databaseURL:
    'https://revents-b4db5-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'revents-b4db5',
  storageBucket: 'revents-b4db5.appspot.com',
  messagingSenderId: '650624880432',
  appId: '1:650624880432:web:ef8697b81e486dc83282f5'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
