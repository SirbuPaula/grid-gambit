"use client"

import React, {useState} from 'react';
import XComponent from '@/app/XComponent/page';
import ZeroComponent from '@/app/ZeroComponent/page';

export default function TableCell({cellId, border, value, refreshBoard}) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (!clicked && value === null) {
            const row = Math.floor(cellId / 3);
            const col = cellId % 3;

            if (row >= 0 && row < 3 && col >= 0 && col < 3) {
                refreshBoard(row, col, 1);
                setClicked(true);
            }
        }
    };

    return (
        <div
            className={`grid-cols-3 cell px-14 py-6 w-20 h-20 flex justify-center items-center ${border ? 'border-x-4 border-blue-950' : ''}`}
            onClick={handleClick}>
            {value === 1 ? <XComponent/> : value === 0 ? <ZeroComponent/> : null}
        </div>
    );
}
