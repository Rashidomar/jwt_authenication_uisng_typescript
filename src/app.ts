import express, { Express, Request, Response } from "express";
import { verifyToken} from "./middleware/auth"
import userRouter from "./routes/userRoute";
import authRouter from "./routes/authRoute"
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const app: Express = express();

app.use(express.json({ limit: '10kb' }));

app.use(cookieParser());

app.use(
  cors({credentials: true, })
);

app.get('/welcome', verifyToken, (req:Request, res:Response)=>{
    res.send("This is a typescript test");
})

app.use(userRouter)
app.use(authRouter)



