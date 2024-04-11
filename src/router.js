// Library imports
import {
    createBrowserRouter,
    Navigate
} from "react-router-dom";

// Custom imports 
import Layout from './Layout';
import { 
    GetStarted, 
    Home, 
    Signup, 
    VerifyEmail 
} from "./pages";
import GetStartedProvider from "./context/GetStartedProvider";


function ProtectedRoutes({ component: Component, ...props }) {
    // const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return <Navigate to={"/signup"} />
    }
    return <Component {...props} />
}

function GetStartedWithProvider(props) {
    return (
        <GetStartedProvider>
            <GetStarted {...props} />
        </GetStartedProvider>
    );
}


const router = createBrowserRouter([
    {
        element: <ProtectedRoutes component={Layout} />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path : '/verify-email', 
                element : <VerifyEmail />
            }
        ]
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/get-started',
        element: (<ProtectedRoutes component={GetStartedWithProvider} />)
    }
]);

export default router; 