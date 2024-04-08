import { useState } from "react";
import { createContext } from "react";

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
    return (
        <GetStartedContext.Provider value={{formData, setFormData}}>
            {children}
        </GetStartedContext.Provider>
    )
}

export default GetStartedProvider; 