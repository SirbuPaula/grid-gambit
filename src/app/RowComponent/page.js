"use client"
import React from "react";
import TableCell from "@/app/CellComponent/page";

export default function RowTable({ id: rowId, border }) {
    return (
        <div className={`row board-row flex justify-center ${border ? 'border-y-4 border-blue-950' : ''}`}>
            <TableCell cellId={rowId * 3 } border={false} />
            <TableCell cellId={rowId * 3 + 1} border={true} />
            <TableCell cellId={rowId * 3 + 2} border={false} />
        </div>
    );
}
