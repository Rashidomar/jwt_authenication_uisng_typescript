import express, { Express, Request, Response } from "express";

export const app: Express = express();

app.get('/', (req:Request, res:Response)=>{
    res.send("This is a typescript test");
})
