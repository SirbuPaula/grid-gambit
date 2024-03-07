"use client"

import React from "react";
import ColumTable from "@/app/ColumComponent/page";


export default function GameField({matrix, refreshBoard}) {
    return (
        <ColumTable matrix={matrix} refreshBoard={refreshBoard}/>
    );
}
