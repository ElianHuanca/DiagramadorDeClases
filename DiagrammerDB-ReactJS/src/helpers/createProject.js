import { baseUrl } from "../const/const";

const objetoNuevoDiagrama = {
    nodes:[],
    edges:[],
    viewport:{
        x:0,
        y:0,
        zoom:1
    }
}

export const createProject = async (nombre = 'nuevo diagrama', idUser) => {
    const url = `${baseUrl}/proyectos`;
    const data = {
        idUser,
        nombre,
        diagramObject: objetoNuevoDiagrama
    }
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    const dataResponse = await response.json();
    return dataResponse;
}