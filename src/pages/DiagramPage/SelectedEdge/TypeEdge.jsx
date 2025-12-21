import React, { useEffect, useState } from 'react'
import { SelectOption } from '../SelectOption';

export const TypeEdge = ({type, change}) => {

    const [selectedOption, setSelectedOption] = useState("");

    const options = [
        { value: 'Asociacion', label: 'Asociacion' },
        { value: 'Herencia', label: 'Herencia' },
        { value: 'Agregacion', label: 'Agregacion' },
        { value: 'Composicion', label: 'Composicion' },
        { value: 'Dependencia', label: 'Dependencia' },
    ];

    const OptionChange = (event) => {
        setSelectedOption(event.target.value);
        change(event.target.value);
    };

    useEffect(() => {
        setSelectedOption(type);
    }, [type])

    return (
        <SelectOption
            options={options}
            value={selectedOption}
            onChange={OptionChange}
        />
    )
}
