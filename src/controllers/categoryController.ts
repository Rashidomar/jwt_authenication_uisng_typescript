import { Response, Request, NextFunction } from "express"
import { AppError, statusCodes } from "../utils/errorhandler"
import { Category } from "../models/Categories"


export const getUsers = async(req:Request, res: Response, next :NextFunction)=>{
    try {
        const allUsers = await Category.find({})

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

export const addCategory  = async(req: Request, res:Response, next :NextFunction) =>
{
    // await connect('mongodb://127.0.0.1:27017/typescript');
    try {
        const {name, description} = req.body;

        const newCategory = await Category.create({
            name : name,
            description : description,
        })

        console.log(newCategory)

        if(newCategory){
            return res.status(201).json({
                message: "Registration Successful", 
                status: 'success',
                data: newCategory
            })
        }

        return next(new AppError({
            message:"Registration Failed",
            statusCode:statusCodes.NO_CONTENT,
        }))

    } catch (error : any) {
        next(error)
    }
 
}
// registerUser('Bill', 'bill@initech.com', "1234").catch(err => console.log(err));

export const updateCategory = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
        const {name, email, password} = req.body;

        if(!(name && email)){
            return next(new AppError({
                message:"field is required",
                statusCode:statusCodes.BAD_REQUEST,
            }))
        }
    
        const updateUser = await Category.findOneAndUpdate(
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


export const deleteCategory = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
        const {email} = req.body;

    if(!(email)){
        return next(new AppError({
            message:"All fields are required",
            statusCode:statusCodes.BAD_REQUEST,
        }))
    }

    const deleteUser = await Category.findOneAndDelete(
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




