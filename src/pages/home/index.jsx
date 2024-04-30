import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate(); 

    useEffect(() => {
        if(!userData?.isEmailVerified) {
            console.log(userData?.isEmailVerified)
            return navigate('/verify-email');
        }
    }, [])
    return (
        <div className="flex h-[500px] items-center justify-center text-3xl font-bold text-center">
            Welcome to dribble {userData?.username || ''}!!
        </div>
    );
};

export default Home;
