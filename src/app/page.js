import React from "react";
import GameField from "@/app/TableComponent/page";
import PlayButton from "@/app/PlayButton/page";


export default function Home() {
    return (
        <main className="bg-blue-300 border-2 min-h-screen flex flex-col justify-center items-center ">

            <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl">Grid Gambit</h1>
            </div>

            <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-8 rounded-lg shadow-lg border-2">
                <GameField/>
            </div>
            <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 flex flex-col justify-center items-center">
                <PlayButton/>
            </div>
        </main>
    );
}


