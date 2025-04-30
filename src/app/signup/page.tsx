"use client"; // this makes the page a client component
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {Axios} from "axios";

export default function SignupPage() {
    const [user,setUser] = React.useState({
        email:"",
        password:"",    
        username:"",
    })

    const onSignup= async ()=>{
    }

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Signup</h1>
        <hr/>
        <label htmlFor="username">Username</label>
        <input 
        className="border-2 border-gray-300 rounded-md p-2 m-2 text-black bg-gray-200"
        type="text" id="username" 
        value={user.username} 
        onChange={(e)=>setUser({...user,username:e.target.value})} 
        />
    </div>
    )
}
