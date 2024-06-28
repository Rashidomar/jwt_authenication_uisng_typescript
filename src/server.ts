import {connectDB} from './db/dbconnect';
import {app} from './app';

const port:number = 4000

const connect = connectDB()

connect.then((result)=>{
    if(result instanceof Error){
      console.log(`An Error occured: ${result.message}`)
    }else{
      console.log("DataBase Connection Successful")
      app.listen(port, ()=>console.log(`[Server]: I am running at https://localhost:${port}`))
    }
})


