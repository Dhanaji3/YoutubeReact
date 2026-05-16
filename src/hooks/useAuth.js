import { useState, useCallback } from 'react';
import {
  signUpUser,
  signInUser,
  signOutUser,
  getCurrentUser,
} from '../utils/authService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = useCallback(async (email, password, displayName) => {
    setLoading(true);
    setError(null);
    try {
      const user = await signUpUser(email, password, displayName);
      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signIn = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const user = await signInUser(email, password);
      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await signOutUser();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const currentUser = getCurrentUser();

  return {
    signUp,
    signIn,
    signOut,
    loading,
    error,
    currentUser,
  };
};
