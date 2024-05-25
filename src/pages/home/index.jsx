import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const { userData } = useContext(UserContext);
    console.log('user data in home page : ',userData)
    // console.log('user data in home page : ', userData);
    // if(!userData?.isEmailVerified){
    //     return <Navigate to={'/verify-email'} />
    // }
    return (
        <div className="flex h-[500px] items-center justify-center text-3xl font-bold text-center">
            Welcome to dribble {userData?.username || ''}!!
        </div>
    );
};

export default Home;
