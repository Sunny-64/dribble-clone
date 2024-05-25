import { io } from "socket.io-client";
import { BASE_URL } from "./ApiService";

export const initializeSocket = (token) => {
    const socket = io(BASE_URL, {
        extraHeaders : {
            Authorization : `Bearer ${localStorage.getItem('token') || token}`
        }
    }); 
    return socket; 
}