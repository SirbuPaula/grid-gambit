"use client"

import React, {useEffect, useState} from "react";
import GameField from "@/app/TableComponent/page";
import PlayButton from "@/app/PlayButton/page";
import MyContext from "@/context/MyContext";

export default function Home() {
    const [nameContext, setNameContext] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);

    useEffect(() => {
        console.log('the age has changed', nameContext)
    }, [nameContext])

    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [gameFinished, setGameFinished] = useState(false);
    const [winner, setWinner] = useState(null)
    const userPlayer = "You";
    const computerPlayer = "CPU"
    const isContextUpdatedOdd = () => {
        return (
            nameContext &&
            nameContext.reduce((totalUpdates, row) => {
                return totalUpdates + row.filter(cell => cell === '1').length;
            }, 0) % 2 !== 0
        );
    };

    const updateMatrix = (row, col, value) => {
        if (gameFinished) {
            console.log("Game is finished! Refresh to start again");
            return;
        }
        console.log(currentPlayer === value);
        if (currentPlayer === value) {
            setNameContext(current => {
                const newMatrix = [...current];
                newMatrix[row][col] = value;
                return newMatrix;
            });

            if (isGameFinished(row, col, value)) {
                let playerName1 = value === 1 ? userPlayer : computerPlayer;
               // alert("Player with " + playerName1 + " won tha game!");
                setWinner(  playerName1 + " won tha game!")
                setGameFinished(true);
                return
            }
            switchPlayer();
        }
    };


    const isGameFinished = (row, col, value) => {
        const matrix = [...nameContext];
        matrix[row][col] = value;
        console.log("isGameFinished " + matrix);

        for (let i = 0; i < 3; i++) {
            if (matrix[i][0] !== null && matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
                return true;
            }
        }


        for (let j = 0; j < 3; j++) {
            if (matrix[0][j] !== null && matrix[0][j] === matrix[1][j] && matrix[1][j] === matrix[2][j]) {
                return true;
            }
        }


        if (matrix[0][0] !== null && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
            return true;
        }


        if (matrix[0][2] !==null && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
            return true;
        }

        return false;
    };


    const switchPlayer = () => {
        setCurrentPlayer(prevPlayer => (prevPlayer === 1 ? 0 : 1))
        console.log("currentPlayer in switch " + currentPlayer);
    };

    return (
        <MyContext.Provider value={{nameContext, updateMatrix}}>
            <main className="bg-blue-300 border-2 min-h-screen flex flex-col justify-center items-center ">
                <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 flex flex-col justify-center items-center">
                    <h1 className="font-bold text-3xl">Grid Gambit</h1>
                </div>
                {gameFinished && (
                    <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 flex flex-col justify-center items-center font-bold text-2xl text-rose-600">
                        <span>{winner}</span>
                    </div>
                )}
                <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-8 rounded-lg shadow-lg border-2">
                    <GameField
                        matrix={nameContext}
                        refreshBoard={updateMatrix}
                    />
                </div>
                <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 flex flex-col justify-center items-center">
                    <PlayButton
                        onClick={isContextUpdatedOdd}
                        matrix={nameContext}
                        refreshBoard={updateMatrix}
                    />
                </div>
            </main>
        </MyContext.Provider>
    );
}