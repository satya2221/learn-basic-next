"use client"
import { useEffect, useState } from "react";

export const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        if (username === "admin" && password === "admin") {
            alert("Kamu adalah admin")
        } 
    }, [username, password])

    return(
        <div>
            <div>Nama kamu: {username}</div>
            <input type="text" 
                onChange={(event)=>{
                    setUsername(event.target.value)
                }} 
            />
            <input type="password" 
                onChange={(event)=>{
                    setPassword(event.target.value)
                }} 
            />
        </div>
    );
}