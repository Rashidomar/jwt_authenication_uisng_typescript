import { Response, Request, NextFunction } from "express"
import bcrypt from "bcrypt"
import { createToken } from "../utils/helpers"
import { AppError, statusCodes } from "../utils/errorhandler"
import  { User } from "../models/Users"

export const userLogin = async(req: Request, res: Response, next: NextFunction)=>{

    try {
        const {email, password} = req.body;
        const findUser = await User.findOne({email:email});

        if(!findUser){
            return next(new AppError({
                statusCode:statusCodes.UNAUTHORIZED,
                message: "Incorrect email."
            }));

        }

        const confirmPassword = await bcrypt.compare(password, findUser.password)

        if(!confirmPassword){
            return next(new AppError({
                statusCode:statusCodes.UNAUTHORIZED,
                message: "Wrong Password..:)"
            }));
        }  
        const accessToken = createToken(findUser._id);
    
        res.cookie('accessToken', accessToken);
        res.cookie('logged_in', true, {httpOnly: false});
        return res.status(200).json({
           'user' : findUser,
           'token': accessToken,
        });

        
    } catch (error:any) {
        next(error)

    }
}

export const userLogout = async(req: Request, res: Response, next: NextFunction)=>{

    try {
        res.cookie('accessToken', "");
        // res.cookie('logged_in', false);
        return res.status(200).json({
           'user' : null,
           'token': "",
        });
        
    } catch (error:any) {
        next(error)
    }

} 



