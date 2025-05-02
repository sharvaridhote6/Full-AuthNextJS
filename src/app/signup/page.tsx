"use client"; // this makes the page a client component
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {Axios} from "axios";
import { useEffect } from "react";
import { set } from "mongoose";

export default function SignupPage() {
    const router= useRouter()
    const [user,setUser] = React.useState({
        email:"",
        password:"",    
        username:"",
    })

    const [buttonDisabled,setButtonDisabled] = React.useState(false);

    const onSignup= async ()=>{
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user]);

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
        placeholder="Enter your username"
        />

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
        onClick={onSignup}>
        {buttonDisabled ? "Please enter all fields" : "Signup"}
        </button>

        <Link href ="/login" className="text-blue-500 hover:underline">
        Already have an account? Login
        </Link>    
    </div>
    )
}

