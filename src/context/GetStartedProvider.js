import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { UserContext } from "./UserProvider";

const initialFormData = {
    userDetails: {
        avatar: '',
        location: '',
        purpose: [],
    }, 
    currPage : 0,
}

export const GetStartedContext = createContext(initialFormData);

const GetStartedProvider = ({ children }) => {
    const [formData, setFormData] = useState(initialFormData); 
    const {userData} = useContext(UserContext); 
    useEffect(() => {
        if(!userData) return; 
        setFormData(prev => {
            return {
                ...prev, 
                userDetails : {
                    avatar : userData?.avatar, 
                    location : userData?.location, 
                    purposes : userData?.purpose, 
                }
            }
        })
    }, [userData])
    return (
        <GetStartedContext.Provider value={{formData, setFormData}}>
            {children}
        </GetStartedContext.Provider>
    )
}

export default GetStartedProvider; 