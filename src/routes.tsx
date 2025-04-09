import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/Signin";
import SignUp from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";


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
    },
    {
        path: "/verify-email",
        element: <VerifyEmail/>
    }
]);