import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/SignUpLogin/Signup";
import Login from "../Pages/SignUpLogin/Login";
import ServiceDEtails from "../ServiceDetails/ServiceDEtails";
import CheckOut from "../Pages/CheckOut/CheckOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/servicedetails/:id',
          element: <ServiceDEtails></ServiceDEtails>,
          loader: ({params})=>fetch(`http://localhost:5000/servicedetails/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=>fetch(`http://localhost:5000/servicedetails/${params.id}`)
        }
      ]
    },
  ]);

  export default router