import React, { useContext, useEffect, useState } from "react";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../../context/AuthProvider";
import {
    getUser,
    resendEmailVerificationMail,
} from "../../services/ApiService";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const navigate = useNavigate();
    const { authData } = useContext(AuthContext);
    const [disableResendEmail, setDisableResendEmail] = useState(false);
    const { userData, setUserData } = useContext(UserContext);



    useEffect(() => {
        let intervalId;
        
        intervalId = setInterval(checkEmailVerified, 20000);
        async function checkEmailVerified () {
            try {
                console.log('ex')
                const res = await getUser();
                console.log('res : ',res.data);
                if (res.status === 200 && res.data.data.isEmailVerified) {
                    clearInterval(intervalId); // Stop the setInterval when emailVerified is true
                    setUserData(res.data.data);
                    navigate("/");
                    return
                }
            } catch (err) {
                console.log(err);
            }
        };

        return () => clearInterval(intervalId)

    }, []);

    const handleResendEmail = async () => {
        setDisableResendEmail(true);
        setTimeout(() => {
            setDisableResendEmail(false);
        }, 1000 * 60);

        if (disableResendEmail) {
            return;
        }
        try {
            const res = await resendEmailVerificationMail(authData?.token);
            if (res.status === 200) {
                toast.success("Email sent!!!");
            }
        } catch (err) {
            toast.error(err);
        }
    };
    return (
        <>
            <ToastContainer />
            <div className="text-gray-500 flex items-center justify-center flex-col my-20 p-5">
                <p className="font-medium text-black text-3xl text-center">
                    Please verify your email...
                </p>
                <FaEnvelopeCircleCheck size={100} className="text-center" />
                <p className="mb-3 text-center">
                    Please verify your email address. We've sent a confirmation
                    email to :
                </p>
                <p className="font-bold text-black mb-3 text-center">
                    {userData?.email}
                </p>
                <p className="mb-2 text-center">
                    Click the confirmation link in that email to begin using
                    Dribble.
                </p>
                <p className="mb-2 text-center">
                    Didn't receive the email? Check your Spam folder. It may
                    have been caught by a filter. If you still don't see it. you
                    can{" "}
                    <a
                        href="#"
                        onClick={handleResendEmail}
                        className={`${
                            disableResendEmail
                                ? "text-gray-400"
                                : "text-pink cursor-pointer"
                        }`}
                    >
                        resend the confirmation email.
                    </a>
                </p>
                <p className="text-center">
                    Wrong email address ?{" "}
                    <a className="text-pink" href="#">
                        Change it
                    </a>
                </p>
            </div>
        </>
    );
};

export default VerifyEmail;
