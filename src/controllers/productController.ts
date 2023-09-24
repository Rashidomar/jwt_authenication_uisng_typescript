import { Response, Request, NextFunction } from "express"
import { AppError, statusCodes } from "../utils/errorhandler"
import { Product } from "../models/products"

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productId = req.params.categoryId

        const foundProduct = await Product.findById(productId)

        return res.json({
            status:"success",
            data: foundProduct
        })

    } catch (error: any) {
        next(error)
    }
}

export const getProducts = async(req:Request, res: Response, next :NextFunction)=>{
    try {
        const allProducts = await Product.find({})

        if(allProducts){
            return res.json({
                status:"success",
                data: allProducts
            })
        }
        
    } catch (error: any ) {
        next(error)
        
        }    
}

export const addProduct  = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
        // name: string;
        // category_id : string;
        // price: number;
        // quantity: number;
        // expireDate : Date;
        const {name, category_id, quantity, price } = req.body;

        const newProduct = await Product.create({
            name : name,
            category_id : category_id,
            price : price,
            quantity : quantity
        })

        console.log(newProduct)

        if(newProduct){
            return res.status(201).json({
                status: 'success',
                data: newProduct
            })
        }

    } catch (error : any) {
        next(error)
    }
 
}

export const updateProduct = async(req: Request, res:Response, next :NextFunction) =>
{
    try {
        const productId = req.params.productId

        const { name, quantity, price } = req.body;

        const updateProduct = await Product.findByIdAndUpdate(productId,
            {  
                name : name,
                price : price,
                quantity : quantity
            })
    
        console.log(updateProduct)
    
        if(updateProduct){
            return res.status(201).json({
                status: 'success',
                message: "Update Successful"
            })
        }
        return next(new AppError({
            message:"Update Failed",
            statusCode:statusCodes.NO_CONTENT,
        }))
     
        
    } catch (error:any) {
        next(error)
    }
   
}

export const deleteProduct = async(req: Request, res:Response, next :NextFunction) =>
{
    try {

        const productId = req.params.productId

        const deleteProduct = await Product.findByIdAndDelete(productId)

        console.log(deleteProduct)

        if(deleteProduct){
            return res.status(201).json({
                status : "success",
                message: "delete Successful"
            })
        }
          
        } catch (error) {
            next(error)
        }
}




