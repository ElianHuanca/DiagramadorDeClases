import { baseUrl } from "../const/const";

export const updateProject = async (id,diagramObject) => {
    const url = `${baseUrl}/proyectos/${id}`;
    const data = {
        diagramObject
    }
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    const dataResponse = await response.json(); 
    return dataResponse;
}