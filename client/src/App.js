import React from "react";
import ReactDOM from "react-dom/client";
import Pnavbar from "./components/Pnavbar.js";
import Snavbar from "./components/Snavbar.js";
import Home from "./Components/Home.js";
import View from "./Components/View.js";
import Error from "./Components/Error.js";
import Create from "./Components/Create.js";
import EditBooking from "./Components/EditBooking.js";
import axios from "axios";
import Tail from "./Components/Tail.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
   axios.defaults.withCredentials = true;
  return (
    <div>
      <Pnavbar />
      <Snavbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/create",
        element: <Create />,
      },
      { path: "/view", element: <View /> },
      {
        path: "/view/:id",
        element: <EditBooking />,
      },
      { path: "/admin", element: <Tail /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
