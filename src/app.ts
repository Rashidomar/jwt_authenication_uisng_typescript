import express, { Express, Request, Response } from "express";
import userRouter from "./routes/userRoute";
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const app: Express = express();

app.use(express.json({ limit: '10kb' }));

app.use(cookieParser());

app.use(
  cors({credentials: true, })
);

app.get('/', (req:Request, res:Response)=>{
    res.send("This is a typescript test");
})

app.use(userRouter)



