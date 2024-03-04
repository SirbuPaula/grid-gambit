"use client"

import React, { useContext, useState } from 'react';
import XComponent from '@/app/XComponent/page';
import MyContext from '@/context/MyContext';


export default function TableCell({ cellId, text, border }) {
    const { nameContext, setNameContext } = useContext(MyContext);
    const [clicked, setClicked] = useState(false);
    const [xComponentId, setXComponentId] = useState(null);

    const handleClick = () => {
        setClicked(true);
        setXComponentId(cellId);

        const row  = Math.floor(cellId / 3);
        const col = cellId % 3;

        const updatedContext = nameContext ? [...nameContext] : [[null, null, null], [null, null, null], [null, null, null]];

        if (row >= 0 && row < 3 && col >= 0 && col < 3) {
            updatedContext[row][col] = 1;
            setNameContext(updatedContext);
        }

       console.log(updatedContext)
    };

    return (
        <div className={`grid-cols-3 cell px-14 py-6 w-20 h-20 flex justify-center items-center ${border ? 'border-x-4 border-blue-950' : ''}`} onClick={handleClick}>
            {clicked && xComponentId === cellId ? <XComponent /> : text}
        </div>
    );
}
