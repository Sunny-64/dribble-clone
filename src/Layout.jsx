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
            <div className='min-h-[400px]'>
            <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout