import "bootstrap/dist/css/bootstrap.min.css"
import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./style/index.css"
import Navbar from "./resources/components/Navbar.jsx"
import Navbar_admin from "./resources/components/Navbar_admin.jsx";
import Footer from "./resources/components/Footer.jsx"
import Register from "./resources/pages/Register.jsx"
import Login from "./resources/pages/Login.jsx"
import Home_admin from "./resources/pages/Home_admin.jsx"
import Home_client from "./resources/pages/Home_client.jsx"
import Games from "./resources/pages/Games.jsx"
import Cart from "./resources/pages/Cart.jsx"
import Publisher from "./resources/pages/Publisher.jsx";
import Categories_list from "./resources/pages/Categories_list.jsx";
import Category from "./resources/pages/Category.jsx";
import Account from "./resources/pages/Account.jsx";
import Admin_account from "./resources/pages/Admin_account.jsx";
import { AuthContext } from "./resources/context/AuthContext.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <div>
      <Navigate to="/login" />
    </div>
    ),
  },
  {
    path: "/home",
    element: (
    <div>
      <Navbar />
      <Home_client />
      <Footer />
    </div>
    ),
  },
  {
    path: "/admin",
    element: (
      <AuthContext.Consumer>
        {(context) =>
          context.currentUser &&
          context.currentUser.dataValues.priority === "admin" ? (
            <div>
              <Navbar_admin />
              <Home_admin />
              <Footer />
            </div>
          ) : (
            <Navigate to="/home" />
          )
        }
      </AuthContext.Consumer>
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
      <AuthContext.Consumer>
        {(context) =>
          context.currentUser &&
          context.currentUser.dataValues.priority === "client" ? (
            <div>
              <Navbar />
              <Cart />
              <Footer />
            </div>
          ) : (
            <Navigate to="/home" />
          )
        }
      </AuthContext.Consumer>
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
    path: "/category",
    element: (
    <div>
      <Navbar />
      <Categories_list />
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
    path: "/account/:id",
    element: (
    <div>
      <Navbar />
      <Account />
      <Footer />
    </div>
    ),
  },
  {
    path: "/admin_account/:id",
    element: (
    <div>
      <Navbar_admin />
      <Admin_account />
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
