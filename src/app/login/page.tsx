"use client"; // this makes the page a client component
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {Axios} from "axios";

export default function LoginPage() {
    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })

    const onLogin= async ()=>{
    }

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Login</h1>
        <hr/>

         <label htmlFor="email">email</label>
        <input 
        className="border-2 border-gray-300 rounded-md p-2 m-2 text-black bg-gray-200"
        type="email" id="email" 
        value={user.email} 
        onChange={(e)=>setUser({...user,email:e.target.value})} 
        placeholder="Enter your email"
        />

         <label htmlFor="password">password</label>
        <input 
        className="border-2 border-gray-300 rounded-md p-2 m-2 text-black bg-gray-200"
        type="password" id="password" 
        value={user.password} 
        onChange={(e)=>setUser({...user,password:e.target.value})}
        placeholder="Enter your password" 
        />

        <button 
        className="bg-blue-500 text-white rounded-md p-2 m-2" 
        onClick={onLogin}>Signup
        </button>

        <Link href ="/signup" className="text-blue-500 hover:underline">
        Visit Signup Page.
        </Link>    
    </div>
    )
}

