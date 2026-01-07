import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    //const url = import.meta.env.VITE_API_URL;
    /* const url = window.__ENV__?.API_URL
        ? `${window.__ENV__.API_URL}`
        : `${window.location.origin}/socket.io`; */

    const url = window.__ENV__?.API_URL
        ? window.__ENV__.API_URL
        : window.location.origin;
    console.log("Socket URL:", url);
    const { socket, online } = useSocket(url);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    )
}