import React, { useContext, useState } from "react";

// Library Imports
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom imports
import { designerSvg } from "./../../assets";
import { registerSchema } from "../../validations/schemas";
import { signUp } from "../../services/ApiService";
import { AuthContext } from "./../../context/AuthProvider";

const Signup = () => {
    const navigate = useNavigate();
    const { setAuthData } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false); 

    const {
        control,
        handleSubmit,
        setError,
        formState: { isValid, errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
        },
        criteriaMode: "all",
    });

    const onSubmit = async (data) => {
        if (!isValid) {
            return;
        }
        if(!isChecked){
            toast.error("please agree to terms and conditions"); 
            return; 
        }
        try {
            setLoading(true);
            const res = await signUp(data);
            if (res.status === 400) {
                alert("input error");
            }
            setAuthData({
                isLoggedIn: true,
                token: res?.data?.token,
            });
            localStorage.setItem("token", res?.data?.token);
            localStorage.setItem("isLoggedIn", true);
            setLoading(false);
            toast.success("Registered successfully!!");
			navigate("/get-started");

		} catch (err) {
            setLoading(false);
            if (
                err?.response?.data?.message?.toLowerCase()?.includes("email")
            ) {
                setError("email", {
                    type: "manual",
                    message: err.response.data.message,
                });
            }
            if (
                err?.response?.data?.message
                    ?.toLowerCase()
                    ?.includes("username")
            ) {
                setError("username", {
                    type: "manual",
                    message: err.response.data.message,
                });
            } else {
                toast.error(err); 
            }
        }
    };

    return (
        <>
			<ToastContainer />
            <div className="lg:grid lg:grid-cols-3 min-h-screen tracking-tight">
                <div className="hidden lg:col-span-1 bg-light-brown py-12 px-14 lg:flex flex-col justify-between">
                    <div>
                        <p className="text-medium-brown text-2xl mb-4">
                            dribble
                        </p>
                        <p className="text-dark-brown text-3xl font-bold mb-3">
                            Discover the world's top Designers & Creatives
                        </p>
                    </div>
                    <img src={designerSvg} alt="" />
                    <p className="text-medium-brown">
                        Illustration from{" "}
                        <a
                            className="underline"
                            href="https://undraw.co/illustrations"
                            target="_blank"
                        >
                            Undraw
                        </a>
                    </p>
                </div>

                <div className="lg:col-span-2">
                    <div className="p-7 flex justify-end mb-4">
                        <p>
                            Already a member ?{" "}
                            <a href="#" className="text-blue-800">
                                Sign In
                            </a>
                        </p>
                    </div>
                    <div className="w-full flex justify-center  py-8">
                        <form
                            className="w-[80%] sm:w-[70%] md:max-w-[50%]"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <p className="text-3xl font-bold mb-8">
                                Sign up to Dribble
                            </p>

                            <ul className="text-red-600 list-disc px-4 mb-3">
                                {errors?.name?.message && (
                                    <li>{errors?.name?.message}</li>
                                )}
                                {errors?.username?.message && (
                                    <li>{errors?.username?.message}</li>
                                )}
                                {errors?.email?.message && (
                                    <li>{errors?.email?.message}</li>
                                )}
                                {errors?.password?.message && (
                                    <li>{errors?.password?.message}</li>
                                )}
                            </ul>

                            <div className="flex flex-col sm:flex-row mb-8 gap-4">
                                <Controller
                                    control={control}
                                    name="name"
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <div className="flex flex-col sm:w-1/2">
                                            <label
                                                htmlFor=""
                                                className="font-bold"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="john"
                                                className={`bg-gray-100 py-2 px-3 rounded-md ${errors?.name && 'border-[1px] border-red-600'}`}
                                                onChange={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                            />
                                        </div>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="username"
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <div className="flex flex-col sm:w-1/2">
                                            <label
                                                htmlFor=""
                                                className="font-bold"
                                            >
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="john"
                                                className={`bg-gray-100 py-2 px-3 rounded-md ${errors?.username && 'border-[1px] border-red-600'}`}
                                                onChange={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                            />
                                        </div>
                                    )}
                                />
                            </div>

                            <Controller
                                control={control}
                                name="email"
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <div className="mb-8 flex flex-col">
                                        <label htmlFor="" className="font-bold">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="example@gmail.com"
                                            className={`bg-gray-100 py-2 px-3 rounded-md ${errors?.email && 'border-[1px] border-red-600'}`}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    </div>
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <div className="mb-8 flex flex-col">
                                        <label htmlFor="" className="font-bold">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="6+ characters"
                                            className={`bg-gray-100 py-2 px-3 rounded-md ${errors?.password && 'border-[1px] border-red-600'}`}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    </div>
                                )}
                            />

                            <div className="mb-6 flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className="w-10 h-7"
                                    onChange={() => setIsChecked(!isChecked)}
                                />
                                <p className="text-gray-600 text-normal">
                                    Creating an account means you're okay with
                                    our{" "}
                                    <a href="#" className="text-blue-700">
                                        Terms of Services
                                    </a>
                                    .{" "}
                                    <a href="#" className="text-blue-700">
                                        Privacy policy
                                    </a>
                                    , and our default{" "}
                                    <a className="text-blue-700" href="#">
                                        Notification Settings
                                    </a>
                                </p>
                            </div>

                            <button
                                className="mb-6 inline-block w-2/5 h-10 bg-pink text-white rounded-md"
                                type="submit"
                            >
                                {loading ? <PulseLoader size={10} color="#ffffff"/> : 'Create Account'}
                            </button>
                            <p className="text-gray-500 text-xs">
                                This Site is protected by reCAPTCHA and the
                                google{" "}
                                <a href="#" className="text-blue-700">
                                    privacy policy
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-blue-700">
                                    Terms of Services
                                </a>{" "}
                                apply.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
