import { useEffect, useState } from "react";
import { initializeSocket } from "../services/socket";
import { useContext, createContext } from "react";
import { UserContext } from "./UserProvider";
import { getUser } from "../services/ApiService";
import { useNavigate } from "react-router-dom";

export const SocketContext = createContext(null);

const fetchUserData = async () => {
    try {
        const res = await getUser();
        return res.data.data;
    } catch (err) {
        console.log(err);
    }
};

const SocketProvider = ({ children }) => {
    const token = localStorage.getItem("token");
    const socket = initializeSocket(token);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [emailVerified, setEmailVerified] = useState();
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const onConnect = (value) => {
            console.log(
                "socket connected this time for real with id : ",
                value
            );
            setIsConnected(true);
        };

        const onDisconnect = () => {
            console.log("socket disconnected...");
            setIsConnected(false);
        };

        const onEmailVerified = async (value) => {
            console.log("email verified event triggered : ", value);
            const user = fetchUserData();
            if (value === "email-verified") {
                setUserData((prev) => ({ ...prev, ...user }));
                navigate("/");
            }
            setEmailVerified(true);
        };

        socket.on("connected", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("email-verified", onEmailVerified);

        return () => {
            socket.off("connection", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("email-verified", onEmailVerified);
        };
    }, []);

    return (
        <SocketContext.Provider value={{ isConnected, emailVerified }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
