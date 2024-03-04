"use client"

import React, {useState} from "react";
import GameField from "@/app/TableComponent/page";
import PlayButton from "@/app/PlayButton/page";
import MyContext from "@/context/MyContext";


export default function Home() {
    const [nameContext, setNameContext] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);

    const isContextUpdatedOdd = () => {
        return nameContext && nameContext.reduce((totalUpdates, row) => {
            return totalUpdates + row.filter(cell => cell === '1').length;
        }, 0) % 2 !== 0;
    };


    const updateMatrix = (row, col, value) =>{
       setNameContext(current => {
           const newMatrix = [...current];
           newMatrix[row][col] = value;
           return newMatrix;
       })
    }

    return (
        <MyContext.Provider value={{nameContext, updateMatrix}}>
        <main className="bg-blue-300 border-2 min-h-screen flex flex-col justify-center items-center ">
            <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl">Grid Gambit</h1>
            </div>
            <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-8 rounded-lg shadow-lg border-2">
                <GameField/>
            </div>
            <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 flex flex-col justify-center items-center">
                <PlayButton onClick={isContextUpdatedOdd}/>
            </div>
        </main>
        </MyContext.Provider>

    );
}


