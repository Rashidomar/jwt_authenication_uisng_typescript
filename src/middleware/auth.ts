import {Response,  Request, NextFunction} from "express"
import  jwt, {Secret} from "jsonwebtoken"
import { AppError, statusCodes } from "../utils/errorhandler";
import { error } from "console";
const SECRET_KEY: Secret = 'secret-key';


export const verifyToken = (req: Request, res: Response, next: NextFunction)=>{

    try {
        let access_token 
        if ( req.headers.authorization && req.headers.authorization.startsWith('Bearer') ) {
            access_token = req.headers.authorization.split(' ')[1];
          } else if (req.cookies.accessToken) {
            access_token = req.cookies.accessToken;
          }

        if (!access_token) {
            return next(new AppError({
              message: "You are not logged in",
              statusCode:statusCodes.UNAUTHORIZED
             }));
          }


        jwt.verify(access_token , SECRET_KEY,(error:any , user: any)=>{
            if(error){
               next(new AppError({
                message: "Invalid Token",
                statusCode:statusCodes.UNAUTHORIZED
               }))       
            }
            res.locals.user = user;
        });
        next()
      } catch (error: any ) {
          next(error)
      }
    };