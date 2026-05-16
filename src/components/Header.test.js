import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Header from './Header';
import appSlice from '../utils/appSlice';
import searchSlice from '../utils/searchSlice';
import authSlice from '../utils/authSlice';

const renderWithRedux = (component) => {
  const store = configureStore({
    reducer: {
      app: appSlice,
      search: searchSlice,
      auth: authSlice,
    },
  });

  return render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
};

describe('Header Component', () => {
  test('renders header without crashing', () => {
    renderWithRedux(<Header />);
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('renders search input', () => {
    renderWithRedux(<Header />);
    const searchInput = screen.getByPlaceholderText(/search videos/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders sign in button when not authenticated', () => {
    renderWithRedux(<Header />);
    const signInBtn = screen.getByText(/sign in/i);
    expect(signInBtn).toBeInTheDocument();
  });
});
