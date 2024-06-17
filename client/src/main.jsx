import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Item from "./pages/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/items`)
        .then((res) => res.data),
  },
  {
    path: "/details/:id",
    element: <Item />,
    loader: async ({ params }) => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/items/${params}`
      );
      return res.data;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
