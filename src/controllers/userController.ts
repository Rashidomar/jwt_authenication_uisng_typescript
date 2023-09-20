import { Response, Request, NextFunction } from "express"
import bcrypt from "bcrypt"
// import { connect } from 'mongoose';

import  { User } from "../models/Users"

export const getUser =async ( req:Request, res: Response, next:NextFunction) => {
    try {
        const userId = req.params.userId
        const founduser = User.findById(userId)

        if(!founduser){
            return res.status(204).json({
                status:"failed",
                data:null
            })
        }
        return res.status(200).json({
            status:"success",
            data:founduser
        })
    } catch (error:any) {
        next(error)
    }
}

export const getUsers = async(req:Request, res: Response, next :NextFunction)=>{
    try {
        const allUsers = await User.find({})

        if(allUsers){
            return res.status(200).json({
                status:"success",
                data:allUsers
            })
        }
        
    } catch (error: any ) {
        console.log(error)
        next(error)
        
        }    
}

export const registerUser  = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
        const {name, email, password} = req.body;

        const hashPassword : string = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            name : name,
            email : email,
            password : hashPassword
        })

        console.log(newUser)

        if(newUser){
            return res.status(201).json({
                message: "Registration Successful", 
                status: 'success',
                data: newUser
            })
        }

    } catch (error : any) {
        next(error)
    }
 
}

export const updateUser = async(req: Request, res:Response, next :NextFunction) =>
{
    try {

        const userId = req.params.userId

        const {name} = req.body;
    
        const updateUser = await User.findByIdAndUpdate(userId,{name : name})
    
        console.log(updateUser)
    
        if(updateUser){
            return res.status(201).json({
                "message": "Update Successful"
            })
        }        
    } catch (error:any) {
        next(error)
    }
   
}

export const deleteUser = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
    const userId = req.params.userId
    const deleteUser = await User.findByIdAndDelete(userId)

    console.log(deleteUser)

    if(deleteUser){
        return res.status(201).json({
            "message": "User deleted Successful"
        })
    }      
    } catch (error) {
        next(error)
    }
    
 
}

// export default {registerUser, getUsers}



