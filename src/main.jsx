import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Profile from './components/Profile.jsx';
import SubProfile from './components/SubProfile.jsx';
import SubProfile1 from './components/SubProfile1.jsx';
import SubProfile2 from './components/SubProfile2.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
  },
  {
    path:'/profile',
    element:<Profile />,
    children:[
      {
        index:true,
        element:<SubProfile />,
      },
      {
        path:'subProfile1',
        element:<SubProfile1 />,
      },
      {
        path:'subProfile2',
        element:<SubProfile2 />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
