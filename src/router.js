// Library imports
import {
    createBrowserRouter,
    Navigate
} from "react-router-dom";

// Custom imports 
import Layout from './Layout';
import { GetStarted, Home, Signup } from "./pages";


function ProtectedRoutes({ component: Component, ...props }) {
    // const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const isLoggedIn = false;
    if (!isLoggedIn) {
        return <Navigate to={"/signup"} />
    }
    return <Component {...props} />
}

const router = createBrowserRouter([
    {
        element: <ProtectedRoutes component={Layout} />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/get-started',
        element: <ProtectedRoutes component={GetStarted}/>
    }
]);

export default router; 