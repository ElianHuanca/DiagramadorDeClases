import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {    
    const url = import.meta.env.VITE_API_URL;
    const { socket, online } = useSocket(url);

    return (
        <SocketContext.Provider value={{socket, online}}>
            { children }
        </SocketContext.Provider>
    )
}