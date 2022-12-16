import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import SignIn from "../Pages/SignUp/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ContactForm from "../Pages/ContactForm/ContactForm";
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
                path: "/products",
                element:<Products></Products>
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
        
        ]
    }
])