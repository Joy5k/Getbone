import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import ContactForm from "../Pages/ContactForm/ContactForm";
import Wishlist from "../Pages/Wishlist/Wishlist";
import DashboardLayout from "../layout/DashboardLayout";
import Details from "../Pages/Details/Details";
import Booking from "../Pages/Booking/Booking"
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../Pages/Dashboard/MyProduct/MyProducts";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Phone from "../Pages/Phone/Phone";
import Desktop from "../Pages/Desktop/Desktop";
import Laptop from "../Pages/Laptop/Laptop";
import SignIn from "../Pages/SignUp/SignIn";
import MyProfile from "../Pages/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
          
            {
                path: "/signin",
                element:<SignIn></SignIn>
            },
            {
                path: "/signup",
                element:<SignUp></SignUp>
            },
        
            {
                path: "/contact",
                element:<ContactForm></ContactForm>
            },
            {
                path: "/phone",
                element:<Phone></Phone>
            },
            {
                path: "/Desktop",
                element:<PrivateRoute><Desktop></Desktop></PrivateRoute>
            },
            {
                path: "/laptop",
                element:<Laptop></Laptop>
            },
        
        
            {
                path: "/wishlist",
                element:<Wishlist></Wishlist>
            },
          
            {
                path: "/booking",
                element:<Booking></Booking>
            },
            {
                path: '/myprofile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
        
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
                
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                // errorElement:<ErrorPage></ErrorPage>,
                children: [
                    {
                        path: "/dashboard",
                        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
                    },
                    {
                    path: '/dashboard/addproduct',
                    element:<AddProduct></AddProduct>
                },
        
                    {
                                path: '/dashboard/myprodcut',
                                element:<MyProducts></MyProducts>
                            },
                ]
            }
        
        ]
    }
])