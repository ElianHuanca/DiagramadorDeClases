import React, { useEffect, useState } from 'react'
import { MarkerType, Panel, useReactFlow, useStore } from 'reactflow';
import { OptionsEdges } from './OptionsEdges';
import { TypeEdge } from './TypeEdge';

const selectedEdgesSelector = (state) =>
    Array.from(state.edges)
        .filter((edge) => edge.selected)
        .map((edge) => ({ id: edge.id, label: edge.data.label, source: edge.source, target: edge.target, tipo: edge.data.tipo }));

export const SelectedEdge = ({ setEdges }) => {
    const selectedEdge = useStore(selectedEdgesSelector);
    const { getNodes } = useReactFlow();
    const selectedEdgeIds = selectedEdge.map((edge) => edge.id);
    const source = getNodes().filter((edge) => edge.id == selectedEdge.map((edge) => edge.source)[0]).map((node) => node.data.label);
    const target = getNodes().filter((edge) => edge.id == selectedEdge.map((edge) => edge.target)[0]).map((node) => node.data.label);

    //const selectedEdgeId = selectedEdge.map((edge) => edge.id);
    const [edge, setEdge] = useState();
    const [type,setType] = useState();
    const isVisible = selectedEdge.length > 0;

    useEffect(() => {
        setType(selectedEdge.map((edge) => edge.tipo));
        //setType(selectedEdge.map((edge) => edge.tipo[0]));
        if (selectedEdge.map((edge) => edge.tipo).includes("Asociacion")) {
            setEdge(selectedEdge.map((edge) => edge.label.split("-"))[0]);
        }
        //console.log(getEdges());
    }, [selectedEdge])



    const handleEdgeChange = () => {
        setEdges(edges => edges.map(ed => {
            if (ed.id == selectedEdgeIds) {
                ed.animated = false;
                ed.markerEnd = {};
                if (type.includes("Asociacion")) {
                    const newEdge = edge[0] + "-" + edge[1];
                    ed.label = newEdge;
                    ed.data.label = newEdge;
                    ed.style = {
                        strokeWidth: 2,
                    }
                }
                else if (type.includes("Herencia")) {
                    ed.label = "Herencia";
                    ed.markerEnd = {
                        type: MarkerType.ArrowClosed,
                        width: 15,
                        height: 15,
                        color: '#000000',
                    };
                    ed.style = {
                        strokeWidth: 2,
                        stroke: '#000000',
                    };
                }
                else if (type.includes("Agregacion")) {
                    ed.label = "Agregacion";
                    ed.markerEnd = {
                        type: MarkerType.Arrow,
                        width: 15,
                        height: 15,
                        color: '#FFFFFF'
                    };
                    ed.style = {
                        strokeWidth: 2,
                        stroke: '#FFFFFF',
                    };
                }
                else if (type.includes("Composicion")) {
                    ed.label = "Composicion";
                    ed.markerEnd = {
                        type: MarkerType.Arrow, width: 15,
                        height: 15,
                        color: '#000000'
                    };
                    ed.style = {
                        strokeWidth: 2,
                        stroke: '#000000',
                    };
                }
                else if (type.includes("Dependencia")) {
                    ed.label = "Dependencia";
                    ed.animated = true;
                    ed.markerEnd = { type: MarkerType.Arrow };
                    ed.style = {
                        strokeWidth: 2,
                    };
                }
                ed.data.tipo = type;
                ed.selected = false;
            }
            return ed;
        }))
    }

    const handleOptionChange = (index, newEdge) => {
        const newArray = [...edge];
        newArray[index] = newEdge;
        setEdge([...newArray]);
    };

    const handleTypeChange = (elem)=>{
        setType(elem);
    }

    

    return (
        <>
            {isVisible &&
                <Panel position="top-right">
                    {edge != undefined &&
                        <div className='text-center text-white'>
                            <div className="grid grid-cols-2 grap-2 my-2">
                                <div>Tipo Relacion:</div>
                                <TypeEdge type={type} change={handleTypeChange} />
                            </div>
                            {type.includes("Asociacion") &&
                                <div className='grid grid-cols-2 grap-2'>
                                    <div className=''>
                                        {source}
                                    </div>
                                    <div className=''>
                                        {target}
                                    </div>
                                    {
                                        edge.map((ed, index) => (
                                            <OptionsEdges key={index} index={index} ed={ed} changeOption={handleOptionChange} />
                                        ))
                                    }
                                </div>
                            }
                            <button className='bg-green-500 rounded my-1 px-1 w-full col-span-2' onClick={handleEdgeChange}>
                                Guardar
                            </button>
                        </div>
                    }
                </Panel>
            }
        </>
    )
}
