import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Profile from './components/Profile.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
  },
  {
    path:'/profile/:compNumber',
    element:<Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
