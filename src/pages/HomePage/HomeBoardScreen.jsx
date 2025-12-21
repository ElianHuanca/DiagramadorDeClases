import React from 'react'
import { ListProyects } from './ListProyects';
import { NewDiagramButton } from './NewDiagramButton';
import { useFetchProjects } from '../../hooks/useFetchProjects';
import {  useSelector } from 'react-redux';

export const HomeBoardScreen = () => {
  
  const idUser = useSelector(state => state.auth.id);
  const data = useFetchProjects(idUser);
  
  return (
    <div className='m-1'>
      <div className='grid grid-cols-3 gap-4'>
        <NewDiagramButton />
        {
          data.map(project => (
            <ListProyects key={project.id} {...project} />
          ))
        }
      </div>
    </div>
  )
}
