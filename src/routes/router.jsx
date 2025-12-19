import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../Pages/ErrorPage';

import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import Register from '../Pages/Register';
import MyProfile from '../Components/MyProfile';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PopularToys from '../Components/PopularToys';
import ToysDetails from '../Components/ToysDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
    {
       path: "/",
       element:<HomePage />,
         loader : ()=>fetch("./data.json")
    },
    {
       path: "/profile",
       element:<MyProfile />
    },
    {
          path:"/populartoys",
          element:<PopularToys />,
         
        },

         {
          path:"/toysdetails",
          element:<PrivateRoute><ToysDetails /></PrivateRoute>,
         
        }
  ]
  },
 
 
  {
        path:'/login',
        element:<LoginPage></LoginPage>
  },
   {
        path:'/register',
        element:<Register></Register>
   },
  {
    
      path: "/*",
    element: <ErrorPage />,
  }
]);
export default router ;