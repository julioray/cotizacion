import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from './firebaseConfig';

const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const loginOut = async () => {
  await signOut(auth);
};

export { createUser, signIn, loginOut };
