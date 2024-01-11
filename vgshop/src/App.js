import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./style/index.css"
import Navbar from "./resources/components/Navbar.jsx"
import Footer from "./resources/components/Footer.jsx"
import Register from "./resources/pages/Register.jsx"
import Login from "./resources/pages/Login.jsx"
import Home_admin from "./resources/pages/Home_admin.jsx"
import Home_client from "./resources/pages/Home_client.jsx"
import Games from "./resources/pages/Games.jsx"
import Cart from "./resources/pages/Cart.jsx"
import Publisher from "./resources/pages/Publisher.jsx";
import Category from "./resources/pages/Category.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <div>
      <Navbar />
      <Home_client />
      <Footer />
    </div>
    ),
  },
  {
    path: "/games/:id",
    element: (
    <div>
      <Navbar />
      <Games />
      <Footer />
    </div>
    ),
  },
  {
    path: "/cart/:id",
    element: (
    <div>
      <Navbar />
      <Cart />
      <Footer />
    </div>
    ),
  },
  {
    path: "/publisher/:id",
    element: (
    <div>
      <Navbar />
      <Publisher />
      <Footer />
    </div>
    ),
  },
  {
    path: "/category/:id",
    element: (
    <div>
      <Navbar />
      <Category />
      <Footer />
    </div>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
