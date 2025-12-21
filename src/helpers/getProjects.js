import { baseUrl } from "../const/const";

export const getProjects = async (idUser) => {
    const url = `${baseUrl}/proyectos/${idUser}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}