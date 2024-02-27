"use client"

import React from "react";
import TableCell from "@/app/CellComponent/page";

export default function RowTable({ border }) {
    return (
        <div className={`row board-row flex justify-center ${border ? 'border-y-4 border-blue-950' : ''}`}>
            <TableCell border={false}/>
            <TableCell border={true}/>
            <TableCell border={false}/>
        </div>
    );
}


