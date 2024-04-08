import { useState } from 'react';
import { createContext } from 'react';

const initialAuthData = {
    username : '',
    profileUrl : '', 
    isLoggedIn : '', 
}

export const AuthContext = createContext(initialAuthData);

const AuthProvider = ({children}) => {
    const [authData, setAuthData] = useState(initialAuthData); 
    return (
        <AuthContext.Provider value={{authData, setAuthData}}>
            {children}  
        </AuthContext.Provider>
    )
}

export default AuthProvider