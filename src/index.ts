import express,{ Request,Response } from "express";
import { Utils } from "./Utils";
import cors from 'cors';
import UserRount from './UserRoutes'

const app = express()
const port:number = 3000

import fs from 'fs';
import path from 'path';
import mongoose from "mongoose";

const data:string = fs.readFileSync(path.join(__dirname,'config.json'),{encoding:'utf-8',flag:'r'})
const config=JSON.parse(data);

const mongoUrl = config.connection;

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
app.use(cors());

app.use('/api',UserRount);

app.get('/',(req:Request, res:Response)=>{
    res.send("hello pop")
});

mongoose.connect(mongoUrl).then(()=>{
    console.log("Connection to Mongo Atlas");
    app.listen(3000,()=>{
        console.log("server start at port 3000");
    })
}).catch(err=>{
    console.log('error connect to mongo atles');
});


app.get('/addUser',async (req:Request, res:Response)=>{
    
    const data:any = {
        "name": "pop",
        "username": "iampop"
    }

    const result = await Utils.addUser(data) //3 party jsonplaceholder
    console.log(result)
    res.send(result)
})

// app.listen(port, ()=>{
//     console.log('server is '+port);
// })

//web brow localhost:3000?userid=1 <---res          (ts)myserver (addUser) <--res-- (3 party) jsonplace... users