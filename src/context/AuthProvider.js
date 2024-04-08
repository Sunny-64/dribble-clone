import { createContext } from 'react';

const authData = {
    username : '',
    profileUrl : '', 
    isLoggedIn : '', 
}

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authData}>
            {children}  
        </AuthContext.Provider>
    )
}

export default AuthProvider