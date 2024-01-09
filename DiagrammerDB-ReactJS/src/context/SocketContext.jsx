import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    //const url = `https://c4maker-server.herokuapp.com/`;
    const url = 'http://localhost:8080';
    const { socket, online } = useSocket(url);

    return (
        <SocketContext.Provider value={{socket, online}}>
            { children }
        </SocketContext.Provider>
    )
}