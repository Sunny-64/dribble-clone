import { useContext, useEffect } from "react";
// Library imports
import { createBrowserRouter, Navigate } from "react-router-dom";

// Custom imports
import Layout from "./Layout";
import { GetStarted, Home, Signup, VerifyEmail } from "./pages";
import GetStartedProvider from "./context/GetStartedProvider";
import UserProvider from "./context/UserProvider";
import { AuthContext } from "./context/AuthProvider";

function TokenRequiredRoutes({ component: Component, ...props }) {
    const { authData } = useContext(AuthContext);
    if (!authData.isLoggedIn) {
        return <Navigate to={"/signup"} />;
    }
    return <Component {...props} />;
}

function UserProviderRoutes({ component: Component, ...props }) {

    return (
        <UserProvider>
            <Component {...props} />
        </UserProvider>
    );
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
        path: "/signup",
        element: localStorage.getItem("isLoggedIn") ? (
            <Navigate to="/" />
        ) : (
            <Signup />
        ),
    },

    {
        path: "/get-started",
        element: <TokenRequiredRoutes component={GetStartedWithProvider}/>,
    },

    {
        element: <Layout />,
        path: "/",
        children: [
            {
                path: "/",
                element: <TokenRequiredRoutes component={Home}/>,
            },
            {
                path: "verify-email",
                element: <TokenRequiredRoutes component={VerifyEmail}/>,
            },
        ],
    },
]);

export default router;
