import React, { useEffect, useState } from 'react'
import { SelectOption } from '../SelectOption';

export const OptionsEdges = ({ ed , changeOption,index}) => {

    const [selectedOption, setSelectedOption] = useState("");
    
    useEffect(() => {
        setSelectedOption(ed);
    }, [ed])
    
    const options = [
        { value: '1', label: '1' },
        { value: '1..*', label: '1..*' },
        { value: '*', label: '*' },
        { value: '0..*', label: '0..*' },
    ];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        changeOption(index,event.target.value);
    };

    return (
        <SelectOption
            options={options}
            value={selectedOption}
            onChange={handleOptionChange}
        />
    )
}
