import {connect} from "@/dbconfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody= await request.json()
        const {username,email,password}=reqBody

        console.log(reqBody);
        // Check if user already exists
        const user =await User.findOne({email})
        if(user){
            return NextResponse.json({message:"User already exists"},{status:400})
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // Create new user
        const newUser=new User({
            username,
            email,
            password:hashedPassword
        })

        const savedUser= await newUser.save()
        return NextResponse.json({message:"User created successfully",user:savedUser},
        {status:201})

        

    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500})
    }
}