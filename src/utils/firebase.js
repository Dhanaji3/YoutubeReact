import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Check if all required Firebase credentials are present
const requiredEnvVars = [
  'REACT_APP_FIREBASE_API_KEY',
  'REACT_APP_FIREBASE_AUTH_DOMAIN',
  'REACT_APP_FIREBASE_PROJECT_ID',
  'REACT_APP_FIREBASE_STORAGE_BUCKET',
  'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
  'REACT_APP_FIREBASE_APP_ID',
];

const missingVars = requiredEnvVars.filter(
  (envVar) => !process.env[envVar] || process.env[envVar].trim() === ''
);

if (missingVars.length > 0) {
  console.error(
    '🚨 Firebase Configuration Error:',
    `Missing required environment variables: ${missingVars.join(', ')}`
  );
  console.error('📝 Please add your Firebase credentials to the .env file.');
  console.error('📖 See .env.example for the required variables.');
  console.error(
    '🔗 Get your Firebase config from: https://console.firebase.google.com/'
  );
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

let app;
let auth;
let db;

try {
  // Initialize Firebase only if config is valid
  if (missingVars.length === 0) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } else {
    throw new Error('Firebase credentials are not properly configured');
  }
} catch (error) {
  console.error('Firebase initialization error:', error.message);
  // Create dummy exports to prevent runtime errors
  app = null;
  auth = null;
  db = null;
}

export { app, auth, db };
export default app;
