import React, { useState } from "react";

export default function Nigthouyt(){
    const [isGoingout,setIsGoingOut] = useState(false)
    const value = isGoingout ? "yes" : "no";
    return(
        <main>
            <h1> i feel like going out tonigth</h1>
            <button aria-label={value} onClick={() => setIsGoingOut(!isGoingout)}>{value}</button>
        </main>
    );
}