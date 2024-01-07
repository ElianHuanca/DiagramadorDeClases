import React, { useEffect, useState } from 'react'
import { SelectOption } from '../SelectOption';

export const InputsAtributes = ({ index,atributo, tipos, deleteAtributo, primaryKey ,changeAtributo,changeTipo,changePK}) => {
    const options = [
        { value: 'Text', label: 'Text' },
        { value: 'Integer', label: 'Integer' },
        { value: 'Float', label: 'Float' },
        { value: 'Date', label: 'Date' },
        { value: 'DateTime', label: 'DateTime' },
    ];

    const [selectedOption, setSelectedOption] = useState("");
    const [atributos, setAtributos] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setSelectedOption(tipos);
        setAtributos(atributo);
        setIsChecked(primaryKey);
    }, [atributo])
    
    const handleatributoChange = (event) => {
        setAtributos(event.target.value);
        changeAtributo(index,event.target.value);
    };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        changeTipo(index,event.target.value);
    };
    const handleCheckboxChange = () => {
        changePK(index);
        setIsChecked(!isChecked);
        changePK(index);
    };

    const handleDelete = () => {
        deleteAtributo(index);
    }
    

    return (
        <div>
            <input type="text" name="titulo" onChange={handleatributoChange} value={atributos} className='px-2 bg-[#2A2A2A] rounded border border-gray-600' />
            <SelectOption
                options={options}
                value={selectedOption}
                onChange={handleOptionChange}
            />
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                PK
            </label>
            <button onClick={handleDelete} className='mx-1 bg-red-600 rounded px-1'>Delete</button>
        </div>
    )
}
