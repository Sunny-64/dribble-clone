import React, { useContext, useState, useEffect } from "react";
// Library imports
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom imports
import { GetStartedContext } from "../../context/GetStartedProvider";
import { GET_STARTED_FORM_PURPOSE } from "../../constants";
import { updateUserDetails } from "../../services/ApiService";
import { UserContext } from "../../context/UserProvider";

const Purpose = ({ data }) => {
    const { userData } = useContext(UserContext);
    const { formData, setFormData } = useContext(GetStartedContext);
    const [purposes, setPurposes] = useState(GET_STARTED_FORM_PURPOSE);
    const [isAnyOptionSelected, setIsAnyOptionSelected] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const anySelected = purposes.some((item) => item.isSelected);
        setIsAnyOptionSelected(anySelected);
    }, [purposes]);

    useEffect(() => {
        if (userData?.purposes) {
            const mappedPurposes = GET_STARTED_FORM_PURPOSE.map((purpose) => ({
                ...purpose,
                isSelected: userData?.purposes?.some(
                    (p) => p.id === purpose.id
                ),
            }));
            setPurposes(mappedPurposes);
        }
    }, [userData?.purposes]);

    const handlePurposeClick = (itemId) => {
        setPurposes((prevPurposes) =>
            prevPurposes.map((purpose) => {
                if (purpose.id === itemId) {
                    return { ...purpose, isSelected: !purpose?.isSelected };
                }
                return purpose;
            })
        );
    };

    const handleFinishProcess = async (e) => {
        setLoading(true);
        e.preventDefault();
        const selectedPurposes = purposes.filter((item) => item?.isSelected);

        try {
            const formDataInterface = new FormData();
            formDataInterface.append("avatar", formData?.userDetails?.avatar);
            formDataInterface.append(
                "location",
                formData?.userDetails?.location
            );
            formDataInterface.append(
                "purposes",
                JSON.stringify(selectedPurposes)
            );
            const res = await updateUserDetails(formDataInterface);
            if (res.status === 200 && !userData?.isEmailVerified) {
                toast.success("Profile updated successfully.");

                navigate("/verify-email");
            } else {
                toast.success("Profile updated successfully.");
                navigate("/");
            }
        } catch (err) {
            setLoading(false);
            toast.error(err);
        }
    };

    return (
        <>
            <ToastContainer />
            <form
                className="w-2/3 md:w-[80%] lg:w-2/3 mx-auto text-center py-10"
                encType="multipart/form-data"
            >
                <p className="text-4xl font-bold mb-5">{data?.title}</p>
                <p className="text-gray-600">{data?.description}</p>
                <div className="md:grid grid-cols-3 my-14 gap-4 tracking-tight">
                    {purposes.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handlePurposeClick(item.id)}
                            className={`my-4 border-[2px] ${
                                item.isSelected
                                    ? "border-pink"
                                    : "border-gray-300"
                            } rounded-xl flex justify-center flex-col items-center p-5`}
                        >
                            <img
                                className="w-36 mb-4"
                                src={item.img}
                                alt="img"
                            />
                            <p className="text-xl font-bold">{item.purpose}</p>
                            <div
                                className={`mt-3 w-6 h-6 rounded-full border-[2px] border-gray-300 ${
                                    item.isSelected && "bg-pink"
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>
                {isAnyOptionSelected && (
                    <p className="font-semibold mb-4">
                        Anything else ? You can select multiple
                    </p>
                )}
                <button
                    onClick={handleFinishProcess}
                    className={`bg-pink px-20 py-2 text-white rounded-md ${
                        !isAnyOptionSelected && "opacity-60"
                    }`}
                    disabled={!isAnyOptionSelected}
                >
                    {" "}
                    {loading ? (
                        <PulseLoader size={10} color="#ffffff" />
                    ) : (
                        "Finish"
                    )}
                </button>
                <p className="mt-3 text-gray-500 text-sm">
                    <Link
                        to={!userData?.isEmailVerified ? "/verify-email" : "/"}
                    >
                        Or press RETURN
                    </Link>
                </p>
            </form>
        </>
    );
};

export default Purpose;
