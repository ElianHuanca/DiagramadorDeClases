import { baseUrl } from "../const/const";

export const deleteProject = async ( id ) =>  {
    const url = `${baseUrl}/proyectos/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',
    })
    const dataResponse = await response.json(); 
    return dataResponse;
}