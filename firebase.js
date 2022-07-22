// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5cOfT4VZG61bSftDDljHM08S9fPl8yNU',
  authDomain: 'clone1-99f93.firebaseapp.com',
  projectId: 'clone1-99f93',
  storageBucket: 'clone1-99f93.appspot.com',
  messagingSenderId: '19851761250',
  appId: '1:19851761250:web:60c277c47a81c486a6e33b',
  measurementId: 'G-XS4RMMZJM2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
