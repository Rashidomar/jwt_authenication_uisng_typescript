import express, { Express, Request, Response, NextFunction } from "express"
import { verifyToken} from "./middleware/auth"
import userRouter from "./routes/userRoute"
import authRouter from "./routes/authRoute"
import categoryRouter from "./routes/categoryRoute"
import productRouter from "./routes/productRoute"
import cors from "cors"
import cookieParser from "cookie-parser"

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
app.use(categoryRouter)
app.use(productRouter)

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || "Failed";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    statusCode : err.statusCode,
    message: err.message,
  });
});



