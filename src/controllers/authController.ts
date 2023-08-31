import { Response, Request } from "express"
import bcrypt from "bcrypt"
import jwt, { Secret  } from "jsonwebtoken"

import  { User } from "../models/Users"

const SECRET_KEY: Secret = 'secret-key';

export const userLogin = async(req: Request, res: Response)=>{

    try {
        const {email, password} = req.body;

        if(!(email && password)){
            return res.json({
                "msg": "All fields are required..:)"
            })
        }

        const findUser = await User.findOne({email:email});

        if(!findUser){
            return res.json({
                "msg": "Wrong Email..:)"
            })
        }
        if(findUser.password !== password){
            // console.log(findUser.password, password)
             return res.json({
                "msg": "Wrong Password..:)"
            })
        } 
        // const comfrmPassword = await bcrypt.compare(password, findUser.password)

        // if(!comfrmPassword){
        //     return res.json({
        //         "msg": "Wrong Password..:)"
        //     })
        // }   
        const accessToken = await jwt.sign(
            { user_id: findUser._id},
            SECRET_KEY,
            {expiresIn: "2h"}
        )

        res.cookie('accessToken', accessToken);
        res.cookie('logged_in', true, {httpOnly: false});
        return res.status(200).json({
           'user' : findUser,
           'token': accessToken,
        });

        
    } catch (error) {
        res.json({
            "msg":error
        });

    }
}


