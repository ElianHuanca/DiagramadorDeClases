import { useEffect, useState } from 'react';
import { Panel, useStore } from 'reactflow';
import { InputsAtributes } from './InputsAtributes';

const selectedNodesSelector = (state) =>
  Array.from(state.nodeInternals.values())
    .filter((node) => node.selected)
    .map((node) => ({ id: node.id, data: node.data }));

export const MultiSelectionToolbar = ({ setNodes }) => {
  const selectedNode = useStore(selectedNodesSelector);
  const selectedNodeIds = selectedNode.map((node) => node.id);
  const selectedNodeLabel = selectedNode.map((node) => node.data.label)[0];

  const [titulo, setTitulo] = useState("");
  const [atributos, setAtributos] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [primaryKey, setPrimaryKey] = useState([]);

  const isVisible = selectedNodeIds.length == 1;

  useEffect(() => {
    setTitulo(selectedNodeLabel);
    setAtributos(selectedNode.map((node) => node.data.atributos)[0]);
    setTipos(selectedNode.map((node) => node.data.tipos)[0]);
    setPrimaryKey(selectedNode.map((node) => node.data.primaryKey)[0]);
  }, [selectedNode])

  const onInputChange = (event) => {
    setTitulo(event.target.value);
  }

  const handleChangeNodes = () => {
    setNodes(nodes => nodes.map(nd => {
      if (nd.id == selectedNodeIds) {
        nd.data.label = titulo;
        nd.data.atributos = [...atributos];
        nd.data.tipos = [...tipos];
        nd.data.primaryKey = [...primaryKey];
        nd.selected = false;
      }
      return nd;
    }))
  }

  const addAtributo = () => {
    const n = atributos.length;
    const newAtributo= [...atributos,  `new${n}`];
    setAtributos(newAtributo);
    const newTipo=[...tipos,"Text"];
    setTipos(newTipo);
    const newPK=[...primaryKey,false];
    setPrimaryKey(newPK);
    return ;
  }

  const deleteAtributo = (pos) => {
    const delAtri =[...atributos];
    delAtri.splice(pos, 1);
    const delTipo = [...tipos];
    delTipo.splice(pos, 1);
    const delPK = [...primaryKey];
    delPK.splice(pos, 1);
    setAtributos(delAtri);
    setTipos(delTipo);
    setPrimaryKey(delPK);    
  }

  const handleChangeAtributo = (index, newAtributo) => {    
    const array= [...atributos];
    array[index]= newAtributo;
    setAtributos([...array]);
    return;
  }

  const handleChangeTipo = (index,newTipo) =>{
    const array= [...tipos];
    array[index]= newTipo;
    setTipos([...array]);
    return;
  }

  const handleChangePK =(index) =>{
    const array= [...primaryKey];
    array[index]=!array[index];
    setPrimaryKey([...array]);
    return;
  }
  
  return (
    <>
      {isVisible &&
        <Panel position="top-right">
          <div className='grid grid-rows-3 gap-1 text-center text-white'>
            <h2>NodeID: {selectedNodeIds}</h2>
            <input type="text" name="titulo" value={titulo} onChange={onInputChange} className='px-2 bg-[#2A2A2A] rounded border border-gray-600' />
            <button className='bg-blue-900 rounded' onClick={addAtributo}>AddAtributo</button>
            {atributos != undefined &&
              atributos.map((atributo, index) => (
                <InputsAtributes key={index} index={index}
                atributo={atributo} 
                deleteAtributo={deleteAtributo} 
                tipos={tipos[index]} 
                primaryKey={primaryKey[index]} 
                changeAtributo={handleChangeAtributo} 
                changeTipo={handleChangeTipo}
                changePK={handleChangePK}
              />
              ))
            }
            <button onClick={handleChangeNodes} className='bg-green-700 rounded h-8'>Guardar</button>            
          </div>
        </Panel>
      }
    </>
  );
}
