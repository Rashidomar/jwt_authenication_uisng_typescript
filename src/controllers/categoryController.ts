import { Response, Request, NextFunction } from "express"
import { AppError, statusCodes } from "../utils/errorhandler"
import { Category } from "../models/Categories"

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryId = req.params.categoryId

        const foundCategory = await Category.findById(categoryId)

        if(!foundCategory){
            return res.json({
                "status":"Failed",
                "Category": null
            })
        }

        return res.json({
            "status":"success",
            "Category": foundCategory
        })

    } catch (error: any) {
        next(error)
    }
}

export const getCategories = async(req:Request, res: Response, next :NextFunction)=>{
    try {
        const allCategories = await Category.find({})

        if(allCategories){
            return res.json({
                "message":"success",
                "Categories": allCategories
            })
        }
        
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

    } catch (error : any) {
        next(error)
    }
 
}

export const updateCategory = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
        const categoryId = req.params.categoryId

        const { name, description } = req.body;

        const updateCategory = await Category.findByIdAndUpdate(categoryId,{name : name, description : description})
    
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

        const categoryId = req.params.categoryId

        const deleteCategory = await Category.findByIdAndDelete(categoryId)

        console.log(deleteCategory)

        if(deleteCategory){
            return res.status(201).json({
                "message": "Registration Successful"
            })
        }
          
        } catch (error) {
            next(error)
        }
}




