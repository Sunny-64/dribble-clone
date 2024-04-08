// native imports
import React from 'react'

// Library imports
import { Outlet } from 'react-router-dom'

// Custom imports
import {
    Header,
    Footer,
} from './components'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout