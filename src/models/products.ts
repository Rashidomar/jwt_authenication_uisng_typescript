import { Schema, model } from 'mongoose';

interface IProduct {
    name: string;
    category_id : string;
    price: number;
    quantity: number;
    expireDate : Date;

 }

const schemaProduct = new Schema<IProduct>({

    name: { 
        type: String, 
        required: true
    },
    category_id : {
        type: String, 
        required: true
    }, 
    price: { 
        type: Number, 
        required: true,
    },
    quantity: {
        type: Number , 
        require:true
    },

    expireDate: {
        type: Date , 
        require:true
    },

});

export let Product = model<IProduct>('Product', schemaProduct)

