import { Response, Request, NextFunction } from "express"
import { AppError, statusCodes } from "../utils/errorhandler"
import { Category } from "../models/Categories"


export const getCategories = async(req:Request, res: Response, next :NextFunction)=>{
    try {
        const allCategories = await Category.find({})

        if(allCategories){
            return res.json({
                "msg":"true",
                "Categories": allCategories
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
    try {
        const {name, description} = req.body;

        const newCategory = await Category.create({
            name : name,
            description : description,
        })

        console.log(newCategory)

        if(newCategory){
            return res.status(201).json({
                status: 'success',
                data: newCategory
            })
        }

        return next(new AppError({
            message:"Failed....:)",
            statusCode:statusCodes.NO_CONTENT,
        }))

    } catch (error : any) {
        next(error)
    }
 
}

export const updateCategory = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
        const {name, description} = req.body;

        // if(!(name && email)){
        //     return next(new AppError({
        //         message:"field is required",
        //         statusCode:statusCodes.BAD_REQUEST,
        //     }))
        // }
    
        const updateCategory = await Category.findOneAndUpdate(
            {name : name},
            {name : name}
            )
    
        console.log(updateCategory)
    
        if(updateCategory){
            return res.status(201).json({
                "message": "Update Successful"
            })
        }
        return next(new AppError({
            message:"Successful",
            statusCode:statusCodes.NO_CONTENT,
        }))
     
        
    } catch (error:any) {
        next(error)
    }
   
}

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

    const deleteCategory = await Category.findOneAndDelete(
        {email : email},
        )

    console.log(deleteCategory)

    if(deleteCategory){
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




