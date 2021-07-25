import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig;

if (process.env.NODE_ENV !== 'production') {
  firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storgaeBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
} else {
  firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storgaeBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGEING_SENDER_ID,
    appId: process.env.APP_ID
  };
}

console.log(process.env.API_KEY);
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
