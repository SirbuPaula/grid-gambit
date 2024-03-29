'use client'

import React, {useContext} from 'react';
import MyContext from "@/context/MyContext";
import ZeroComponent from "@/app/ZeroComponent/page";

export default function PlayButton({refreshBoard}) {
    const {nameContext, setNameContext} = useContext(MyContext);

    const handlePlayClick = () => {
        if (nameContext) {
            let emptyCells = [];
            nameContext.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    if (cell === null) {
                        emptyCells.push([rowIndex, colIndex]);
                    }
                });
            });

            if (emptyCells.length > 0) {
                const randomIndex = Math.floor(Math.random() * emptyCells.length);
                const [randomRow, randomCol] = emptyCells[randomIndex];
                refreshBoard(randomRow, randomCol, 0);
            }
        }
    };

    const isContextUpdatedOdd = () => {
        return nameContext && nameContext.reduce((totalUpdates, row) => {
            return totalUpdates + row.filter(cell => cell === '1').length;
        }, 0) % 2 !== 0;
    };

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePlayClick}>
                Next Play
                {isContextUpdatedOdd() && <ZeroComponent/>}
            </button>
        </div>
    );
}

