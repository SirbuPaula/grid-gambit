import React from "react";
import TableCell from "@/app/CellComponent/page";

export default function ColumTable(columborder){
    return(
        <div className="flex-row justify-center items-center h-screen w-screen">
            <div className={`board-row flex justify-center py-4 ${columborder ? 'border-y-4 border-white' : ''}`}>
                <TableCell text="1"/>
                <TableCell text="1"/>
                <TableCell text="1"/>
            </div>
        </div>
    )
}