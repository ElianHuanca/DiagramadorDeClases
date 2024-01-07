import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { createProject } from '../../helpers/createProject';

export const NewDiagramButton = () => {

    const navigate = useNavigate();
    const idUser = useSelector(state => state.auth.id);
  
    const handleClick = async() => {
      const nuevoDiagrama =  await createProject('New Project', idUser);      
      if(nuevoDiagrama.diagramObject){
          navigate(`/diagram/${nuevoDiagrama.id}`);
      }else{
          
      }
    }
    return (
        <Link
            to="/diagram/"
            onClick={handleClick}
            className='m-3 p-3 text-center text-white border border-gray-500 rounded-md'
        >
            <div className='grid grid-rows-2'>
                <div className='text-xl'>
                    Nuevo Diagrama 
                </div>
                <div className=''>
                    Click En El Cuadro para crear un nuevo Diagrama De Clases
                </div>
            </div>
        </Link>
    )
}
