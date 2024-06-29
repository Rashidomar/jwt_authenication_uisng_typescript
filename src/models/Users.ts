import { Schema, model } from 'mongoose';
interface IUser {
    name: string;
    email: string;
    // userType : UserTypes,
    password : string,
  }

const schemaUser = new Schema<IUser>({

    name: { 
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true 
    },
    password: { 
        type: String,
        required: true,

    },
});

export let User = model<IUser>('User', schemaUser)

