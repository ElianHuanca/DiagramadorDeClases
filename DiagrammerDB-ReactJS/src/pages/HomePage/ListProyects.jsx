import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../helpers/deleteProject';

export const ListProyects = ({ id, nombre = "proyect name", date = "12-12-2022" }) => {

  const userName = useSelector(state => state.auth.nombre);

  const handleClickEliminar = async () => {
    await deleteProject(id);
    window.location.reload(true);
  }

  return (
    <div className='border border-gray-500 rounded-md m-3 p-3 text-white '>
      <div className='grid grid-rows-3 gap-2'>
        <div>
          ProyectoId : {id}
        </div>
        <div>
          Nombre : {nombre}
        </div>
        <div>
          Usuario : {userName}
        </div>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <Link to={`/diagram/${id}`} className='bg-green-500 rounded px-2 my-1 text-center'>Abrir</Link>
        <button className='bg-red-500 rounded px-2 my-1' onClick={handleClickEliminar}>Eliminar</button>
      </div>
    </div>
  );
}
