import { useContext, useEffect } from "react";
// Library imports
import { createBrowserRouter, Navigate } from "react-router-dom";

// Custom imports
import Layout from "./Layout";
import { GetStarted, Home, Signup, VerifyEmail } from "./pages";
import GetStartedProvider from "./context/GetStartedProvider";
import UserProvider from "./context/UserProvider";
import { AuthContext } from "./context/AuthProvider";
import SocketProvider from './context/SocketProvider'

function TokenRequiredRoutes({ component: Component, ...props }) {
    const { authData } = useContext(AuthContext);
    if (!authData.isLoggedIn) {
        return <Navigate to={"/signup"} />;
    }
    return <Component {...props} />;
}

function GetStartedWithProviders(props) {
    return (
        <UserProvider>
            <GetStartedProvider>
                <GetStarted {...props} />
            </GetStartedProvider>
        </UserProvider>
    );
}

const router = createBrowserRouter([
    {
        path: "/signup",
        element: localStorage.getItem("isLoggedIn") ? (
            <Navigate to="/" />
        ) : (
            <Signup />
        ),
    },

    {
        path: "/get-started",
        element: <TokenRequiredRoutes component={GetStartedWithProviders} />,
    },

    {
        element: <TokenRequiredRoutes component={Layout} />,
        path: "/",
        children: [
            {
                path: "/",
                element: <UserProvider><Home /></UserProvider>,
            },
            {
                path: "verify-email",
                element: (
                    <UserProvider>
                        <SocketProvider>
                            <VerifyEmail />
                        </SocketProvider>
                    </UserProvider>
                ),
            },
        ],
    },
]);

export default router;
