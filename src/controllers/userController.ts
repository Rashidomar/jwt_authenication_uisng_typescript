import { Response, Request, NextFunction } from "express"
import bcrypt from "bcrypt"
import { AppError, statusCodes } from "../utils/errorhandler"
// import { connect } from 'mongoose';

import  { User } from "../models/Users"


export const getUsers = async(req:Request, res: Response, next :NextFunction)=>{
    try {
        const allUsers = await User.find({})

        if(allUsers){
            return res.json({
                "msg":"true",
                "users":allUsers
            })
        }

        return next(new AppError({
            message:"An error occured..",
            statusCode:statusCodes.NO_CONTENT,
        }))
        
    } catch (error: any ) {
        next(error)
        
        }    
}

export const registerUser  = async(req: Request, res:Response, next :NextFunction) =>
{
    // await connect('mongodb://127.0.0.1:27017/typescript');
    try {
        const {name, email, password} = req.body;

        // if(!(name && email && password)){
        //     return next(new AppError({
        //         message:"All fields are required",
        //         statusCode:statusCodes.BAD_REQUEST,
        //     }))
        // }

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

        return next(new AppError({
            message:"Registration Successful",
            statusCode:statusCodes.NO_CONTENT,
        }))

    } catch (error : any) {
        next(error)
    }
 
}
// registerUser('Bill', 'bill@initech.com', "1234").catch(err => console.log(err));

export const updateUser = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
        const {name, email, password} = req.body;

        if(!(name && email)){
            return next(new AppError({
                message:"field is required",
                statusCode:statusCodes.BAD_REQUEST,
            }))
        }
    
        const updateUser = await User.findOneAndUpdate(
            {email : email},
            {name : name}
            )
    
        console.log(updateUser)
    
        if(updateUser){
            return res.status(201).json({
                "message": "Update Successful"
            })
        }
        return next(new AppError({
            message:"Registration Successful",
            statusCode:statusCodes.NO_CONTENT,
        }))
     
        
    } catch (error:any) {
        next(error)
    }
   
}

// updateUser('billy', 'bill@initech.co').catch(err => console.log(err));


export const deleteUser = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
        const {email} = req.body;

    if(!(email)){
        return next(new AppError({
            message:"All fields are required",
            statusCode:statusCodes.BAD_REQUEST,
        }))
    }

    const deleteUser = await User.findOneAndDelete(
        {email : email},
        )

    console.log(deleteUser)

    if(deleteUser){
        return res.status(201).json({
            "message": "Registration Successful"
        })
    }
    return next(new AppError({
        message:"Registration Successful",
        statusCode:statusCodes.NO_CONTENT,
    }))
        
    } catch (error) {
        next(error)
    }
    
 
}

// deleteUser('bill@initech.com').catch(err => console.log(err));

// export default {registerUser, getUsers}



