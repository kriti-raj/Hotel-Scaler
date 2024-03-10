import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import View from './components/View';
import Create from './components/Create';
import EditBooking from './components/EditBooking';
// import Tail from './components/Tail';

export default function App() {
  axios.defaults.withCredentials = true;
  // axios.post('hotel-scaler-backend.vercel.app',)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/create",
      element: <Create />
    },
    {
      path: "/view",
      element: <View />
    },
    {
      path: "/view/:id",
      element: <EditBooking />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}