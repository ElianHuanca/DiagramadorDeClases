import React from 'react'

export const DBComponent = ({ atributos, tipos, primaryKey }) => {
    return (
        <div>
            {atributos.map((atributo, index) => (
                <div key={index}>
                    {primaryKey[index] && "(pk) "}
                    {atributo}: 
                    {tipos[index]}
                </div>
            ))}
        </div>
    )
}

{/* <div key={index} className=''>
    <div>{atributo} :</div>
    <div>{tipos[index]}</div>
    {primaryKey.includes(atributos[index]) &&
        <div className='p-1 px-2'><BsFillKeyFill /></div>
    }
</div> */}