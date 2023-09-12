import jwt, { Secret } from "jsonwebtoken";

const SECRET_KEY: Secret = 'secret-key';


export const createToken =  (user_id: object)=>{
    const token = jwt.sign(
        { user_id: user_id},
        SECRET_KEY,
        {
          expiresIn: "2h",
        }
    );

    return token
}


