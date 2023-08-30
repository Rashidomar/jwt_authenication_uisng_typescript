import {connectDB} from './db/dbconnect';
import {app} from './app';

const port:number = 4000

// const app: Express = express();

// app.get('/', (req:Request, res:Response)=>{
//     res.send("This is a typescript test");
// })

const connect = connectDB()

connect.then(()=>{
  app.listen(port, ()=>{
    console.log(`[Server]: I am running at https://localhost:${port}`);
  })
})



