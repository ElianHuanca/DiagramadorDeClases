import { baseUrl } from "../const/const";

export const getProject = async(id) => {
    const url = `${baseUrl}/proyectos/proyecto/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}