"use client"
import { useState } from "react";

export const Form = () => {
    const [input, setInput] = useState("")
    return(
        <div>
            <div>Nama kamu: {input}</div>
            <input type="text" onChange={(event)=>{
                setInput(event.target.value)
            }} />
        </div>
    );
}