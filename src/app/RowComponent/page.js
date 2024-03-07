"use client"
import React from "react";
import TableCell from "@/app/CellComponent/page";

export default function RowTable({id: rowId, border, rowValues, refreshBoard}) {
    return (
        <div className={`row board-row flex justify-center ${border ? 'border-y-4 border-blue-950' : ''}`}>
            <TableCell cellId={rowId * 3} border={false} value={rowValues[0]} refreshBoard={refreshBoard}/>
            <TableCell cellId={rowId * 3 + 1} border={true} value={rowValues[1]} refreshBoard={refreshBoard}/>
            <TableCell cellId={rowId * 3 + 2} border={false} value={rowValues[2]} refreshBoard={refreshBoard}/>
        </div>
    );
}
