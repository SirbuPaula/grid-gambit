"use client"

import React from "react";
import RowTable from "@/app/RowComponent/page";

export default function ColumnTable({matrix, refreshBoard}) {
    return (
        <div className={`grid-cols-3 colum board-column flex flex-col items-center px-4`}>
            <RowTable id={0} border={false} rowValues={matrix[0]} refreshBoard={refreshBoard}/>
            <RowTable id={1} border={true} rowValues={matrix[1]} refreshBoard={refreshBoard}/>
            <RowTable id={2} border={false} rowValues={matrix[2]} refreshBoard={refreshBoard}/>
        </div>
    );
}




