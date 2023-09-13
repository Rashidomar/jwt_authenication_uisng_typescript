import { Schema, model } from 'mongoose';

interface ICategory {
    name: string;
    description : string;
  }

const schemaCategory = new Schema<ICategory>({

    name: { 
        type: String, 
        required: true
    },

    description :{
        type: String, 
        required: true
    }

});

export let Category = model<ICategory>('Category', schemaCategory)

