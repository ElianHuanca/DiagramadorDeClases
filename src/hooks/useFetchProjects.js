import { useEffect, useState } from "react";
import { getProjects } from "../helpers/getProjects";

export const useFetchProjects = (idUser) => {
    const [state, setState] = useState([]);
    useEffect( () => {
        getProjects(idUser).then(data =>{
            setState(data);
        })
    }, [idUser])
    return state;
}