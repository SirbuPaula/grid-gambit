"use client"

import React from "react";
import ColumTable from "@/app/ColumComponent/page";
import { useState} from "react";
import MyContext from "@/context/MyContext";


export default function GameField() {

    const [nameContext, setNameContext] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
]);

    return (
        <MyContext.Provider value={{ nameContext, setNameContext }}>
            <ColumTable/>
        </MyContext.Provider>

    );
}
