import { Response, Request } from "express"
import { connect } from 'mongoose';

import  { User } from "../models/Users"




// const register = async(req: Request, res:Response) =>
const register = async(name: string, email: string, password:string) =>
{
    await connect('mongodb://127.0.0.1:27017/typescript');

    // const {name, email, password} = req.body;

    // const name   = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;

    if(!(name && email && password)){
    //     return res.json({
    //         "message": "All fields are required"
    // })
        console.log("All fields are required")
    }

    const newUser = await User.create({
        name : name,
        email : email,
        password : password
    })

    console.log(newUser)

    if(newUser){
    //     return res.json({
    //         "message": "Registration Successful"
    // })
        console.log("Registration Successful")

    }else{
    //     return res.json({
    //         "message": "Registration failed"
    // })
        console.log("Registration failed")

    }
 
}

register('Bill', 'bill@initech.com', "1234").catch(err => console.log(err));

