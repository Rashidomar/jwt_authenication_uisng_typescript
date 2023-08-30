"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnect_1 = require("./db/dbconnect");
const app_1 = require("./app");
const port = 4000;
// const app: Express = express();
// app.get('/', (req:Request, res:Response)=>{
//     res.send("This is a typescript test");
// })
const connect = (0, dbconnect_1.connectDB)();
connect.then(() => {
    app_1.app.listen(port, () => {
        console.log(`[Server]: I am running at https://localhost:${port}`);
    });
});
