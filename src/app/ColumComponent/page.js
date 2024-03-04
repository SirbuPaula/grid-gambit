"use client"

import React from "react";
import RowTable from "@/app/RowComponent/page";

export default function ColumnTable() {
    return (
        <div className={`grid-cols-3 colum board-column flex flex-col items-center px-4`}>
            <RowTable id={0} border={false} />
            <RowTable id={1} border={true} />
            <RowTable id={2} border={false} />
        </div>
    );
}




