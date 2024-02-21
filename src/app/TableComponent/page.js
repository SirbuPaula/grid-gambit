import React from "react";
import RowTable from "@/app/RowComponent/page";
import ColumTable from "@/app/CollumComponent/page";


export default function GameField() {
    return (

        <div className="flex justify-center items-center h-screen w-screen">
            <div>
                <RowTable border={false}>
                    <ColumTable columborder={false}/>
                </RowTable>
                <RowTable border={true}>
                    <ColumTable columborder={true} />
                </RowTable>
                <RowTable border={false}>
                    <ColumTable columborder={false}/>
                </RowTable>

            </div>
        </div>
)
}