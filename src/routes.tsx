import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/Signin";
import SignUp from "./pages/Signup";


export default createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/signin",
        element: <SignInPage/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    }
]);