import { Response, Request } from "express"
import { connect } from 'mongoose';

import  { User } from "../models/Users"


export const getUsers = async(req:Request, res: Response)=>{

    const allUsers = await User.find({})

    if(allUsers){
        return res.json({
            "msg":"true",
            "users":allUsers
        })
    }else{
        return res.json({
            "msg":"false",
            "users": null
        })
    }
}

export const registerUser  = async(req: Request, res:Response) =>
{
    // await connect('mongodb://127.0.0.1:27017/typescript');
    try {

        const {name, email, password} = req.body;

        if(!(name && email && password)){
            return res.json({
                "message": "All fields are required"
        })
        }

        const newUser = await User.create({
            name : name,
            email : email,
            password : password
        })

        console.log(newUser)

        if(newUser){
            return res.json({
                "message": "Registration Successful"
        })

        }else{
            return res.json({
                "message": "Registration failed"
        })

        }

        
    } catch (error) {
        return res.json({
            "message": error
    })
    }
 
}
// registerUser('Bill', 'bill@initech.com', "1234").catch(err => console.log(err));

export const updateUser = async(req: Request, res:Response) =>
{
    const {name, email, password} = req.body;

    if(!(name && email)){
        return res.json({
            "message": "All fields are required"
    })
    }

    const updateUser = await User.findOneAndUpdate(
        {email : email},
        {name : name}
        )

    console.log(updateUser)

    if(updateUser){
        return res.json({
            "message": "Registration Successful"
    })

    }else{
        return res.json({
            "message": "Registration failed"
    })

    }
 
}

// updateUser('billy', 'bill@initech.co').catch(err => console.log(err));


export const deleteUser = async(req: Request, res:Response) =>
{
    const {email} = req.body;

    if(!(email)){
        return res.json({
            "message": "All fields are required"
    })
    }

    const updateUser = await User.findOneAndDelete(
        {email : email},
        )

    console.log(updateUser)

    if(updateUser){
        return res.json({
            "message": "Registration Successful"
    })

    }else{
        return res.json({
            "message": "Registration failed"
    })

    }
 
}

// deleteUser('bill@initech.com').catch(err => console.log(err));

// export default {registerUser, getUsers}



