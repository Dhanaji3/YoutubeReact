import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebase';

// Check if Firebase is initialized
const checkFirebaseAuth = () => {
  if (!auth) {
    throw new Error(
      'Firebase is not configured. Please add your Firebase credentials to the .env file. See FIREBASE_SETUP.md for instructions.'
    );
  }
};

// Sign Up
export const signUpUser = async (email, password, displayName) => {
  checkFirebaseAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {
      displayName: displayName,
    });
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Sign In
export const signInUser = async (email, password) => {
  checkFirebaseAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Sign Out
export const signOutUser = async () => {
  checkFirebaseAuth();
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Monitor Auth State
export const monitorAuthState = (callback) => {
  checkFirebaseAuth();
  return onAuthStateChanged(auth, callback);
};

// Get Current User
export const getCurrentUser = () => {
  return auth.currentUser;
};
