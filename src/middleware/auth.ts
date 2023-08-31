import {Response,  Request, NextFunction} from "express"
import  jwt, {Secret} from "jsonwebtoken"
const SECRET_KEY: Secret = 'secret-key';


export const verifyToken = (req: Request, res: Response, next: NextFunction)=>{
    try {
        let access_token 

        if ( req.headers.authorization && req.headers.authorization.startsWith('Bearer') ) {
            access_token = req.headers.authorization.split(' ')[1];
          } else if (req.cookies.accessToken) {
            access_token = req.cookies.accessToken;
          }

        jwt.verify(access_token , SECRET_KEY,(err:any , user: any)=>{
            if(err){
                return res.status(401).json(    
                    "Error Occured"
                    ) 
            }
            res.locals.user = user;
        });
        
      } catch (err: any ) {
        return res.status(401).send("Invalid Token");
      }
      return next();
    };