import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBi4K7-ezVa_VRc1-oz11QUDpnm3qkoYqQ',
  authDomain: 'cotizacion-5cd7b.firebaseapp.com',
  projectId: 'cotizacion-5cd7b',
  storageBucket: 'cotizacion-5cd7b.appspot.com',
  messagingSenderId: '1065769496299',
  appId: '1:1065769496299:web:b799916cc290d62c60d8ae',
  measurementId: 'G-F3SCT2LCPL'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
export { db, auth };
