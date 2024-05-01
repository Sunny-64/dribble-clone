import { useEffect, useState } from "react";
import { createContext } from "react";
import { getUser } from "../services/ApiService";
import { useNavigate } from "react-router-dom";

const intialData = {
    username: "",
    email: "",
    avatar: "",
    isEmailVerified: false,
};

export const UserContext = createContext(intialData);

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(intialData);
    const navigate = useNavigate(); 
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await getUser();
                if(res.status === 400 || res.status === 500){
                    return navigate('/verify-email');
                }
                setUserData(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
