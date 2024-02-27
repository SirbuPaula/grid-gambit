'use client'

import React, { useState } from "react";
import ZeroComponent from "@/app/ZeroComponent/page";


export default function PlayButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}>
            {clicked ? <ZeroComponent /> : "Next Move"}
        </button>
    );
}
