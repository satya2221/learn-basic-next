"use client"
import { useEffect, useState } from "react";

export const Form = () => {
    const [input, setInput] = useState("")

    useEffect(()=>{
        if (input === "satya") {
            console.log("Ini adalah satya")
        } else {
            console.log("Ini bukan satya")
        }
    }, [input])

    return(
        <div>
            <div>Nama kamu: {input}</div>
            <input type="text" onChange={(event)=>{
                setInput(event.target.value)
            }} />
        </div>
    );
}