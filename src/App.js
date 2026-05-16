import React, { useEffect, lazy, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './utils/store';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SuspenseWrapper from './components/SuspenseWrapper';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';
import FirebaseSetupError from './components/FirebaseSetupError';
import { monitorAuthState } from './utils/authService';
import { setUser } from './utils/authSlice';

// Lazy load components for code splitting
const Body = lazy(() => import('./components/Body'));
const Watch = lazy(() => import('./components/Watch'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));

const Layout = () => (
  <div className="App shadow-lg px-2 mx-auto flex gap-2">
    <div>
      <SideBar />
    </div>
    <div className="flex-1">
      <Header />
      <SuspenseWrapper>
        <Outlet />
      </SuspenseWrapper>
    </div>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Body />
          </ProtectedRoute>
        ),
      },
      {
        path: 'watch',
        element: (
          <ProtectedRoute>
            <Watch />
          </ProtectedRoute>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

function AppContent() {
  const dispatch = useDispatch();
  const [firebaseError, setFirebaseError] = useState(null);

  useEffect(() => {
    try {
      // Monitor authentication state
      const unsubscribe = monitorAuthState((user) => {
        if (user) {
          dispatch(
            setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          );
        } else {
          dispatch(setUser(null));
        }
      });

      return unsubscribe;
    } catch (error) {
      setFirebaseError(error.message);
      return undefined;
    }
  }, [dispatch]);

  // Show Firebase setup error if configured incorrectly
  if (firebaseError) {
    return <FirebaseSetupError />;
  }

  return (
    <ErrorBoundary>
      <RouterProvider router={appRouter} />
    </ErrorBoundary>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
