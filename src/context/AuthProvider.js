import { useEffect, useState } from 'react';
import { createContext } from 'react';

const initialAuthData = {
    isLoggedIn : false, 
    token : ''
}

export const AuthContext = createContext(initialAuthData);

const AuthProvider = ({children}) => {
    const [authData, setAuthData] = useState(initialAuthData); 
    useEffect(() => {
        setAuthData({
            isLoggedIn : localStorage.getItem('isLoggedIn'), 
            token : localStorage.getItem('token')
        }); 
    }, [])
    return (
        <AuthContext.Provider value={{authData, setAuthData}}>
            {children}  
        </AuthContext.Provider>
    )
}

export default AuthProvider