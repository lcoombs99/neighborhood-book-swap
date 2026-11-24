import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useState } from 'react'
import './App.css'

import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Authenticationpage from './pages/AuthenticationPage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import BookRequestPage from './pages/BookRequestPage';
import ProfilePage from './pages/ProfilePage';
import EditBookPage from './pages/EditBookPage';
import AddBookPage from './pages/AddBookPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'authentication',
        element: <Authenticationpage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'browse_books',
        children: [
          {
            index: true,
            element: <BrowseBooksPage />

          },
          {
            path: 'request',
            element: <BookRequestPage />
          },
          {
            path: 'add',
            element: <AddBookPage />
          },
          {
            path: ':bookId',
            id: 'book-detail',

            children: [
              {
                index: true,
                element: <BookDetailsPage />

              },
              {
                path: 'edit',
                element: <EditBookPage />
              }
            ] //end of Book-detail children
          },
        ], //end of browse_books children
      },
    ],//end of RootLayout children
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
