"use client"

import React, {useContext, useState} from "react";
import XComponent from "@/app/XComponent/page";
import MyContext from "@/context/MyContext";

export default function TableCell({ text, border}) {
    const context = useContext(MyContext)
    const [clicked, setClicked] = useState(false);
    const[emptyCell, setEmptyCell] = useState(null)

    const handleClick = () => {
        if ( emptyCell === null) {
            setClicked(true);
            setEmptyCell("X");
        } else if  (emptyCell === "X"){
            setEmptyCell(null);
        }
    };

    return (
        <div className={`grid-cols-3 cell px-14 py-6 w-20 h-20 flex justify-center items-center ${emptyCell ? 'text-blue-950 border-blue-950' : ''} ${border ? 'border-x-4 border-blue-950' : ''} ${context}`} onClick={handleClick}>
            {clicked && emptyCell? context.nameContext && <XComponent/> :text}
        </div>
    );
}
