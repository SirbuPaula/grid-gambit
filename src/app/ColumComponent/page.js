"use client"

import React from "react";
import RowTable from "@/app/RowComponent/page";


export default function ColumTable() {
    return (
        <div className={`grid-cols-3 colum board-column flex flex-col items-center px-4`}>
            <RowTable border={false}/>
            <RowTable border={true}/>
            <RowTable border={false}/>
        </div>
    );
}




