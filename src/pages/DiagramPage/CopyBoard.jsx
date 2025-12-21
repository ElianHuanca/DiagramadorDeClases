import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';
export const CopyBoard = () => {
    const params=useParams();
    const link=`http://localhost:5173/diagram/${params.id}`;

    const handleCopyClick = () => {
        // Aquí puedes agregar cualquier lógica adicional que desees antes de copiar el contenido
        console.log('Contenido copiado:', inputValue);
    };

    return (
        <div className="flex">
            <input
                type="text"
                value={link}
                className="border border-gray-400 p-2 mr-2"
                readOnly
            />
            <CopyToClipboard text={link}>
                <button
                    onClick={handleCopyClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Copiar
                </button>
            </CopyToClipboard>
        </div>
    );
};


