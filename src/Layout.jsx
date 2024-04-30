// native imports
import React from "react";

// Library imports
import { Outlet } from "react-router-dom";

// Custom imports
import { Header, Footer } from "./components";
import UserProvider from "./context/UserProvider";

const Layout = () => {
    return (
        <>
            <UserProvider>
                <Header />
                <div className="min-h-[400px]">
                    <Outlet />
                </div>
                <Footer />
            </UserProvider>
        </>
    );
};

export default Layout;
