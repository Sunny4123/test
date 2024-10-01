import express,{ Request,Response } from "express";
import { Utils } from "./Utils";
import axios from "axios";

const app = express();
const port:number = 3000;

app.get('/',(req:Request,res:Response)=>{
    res.send("hello Sunny2");
})

app.get('/addUser',async (req:Request,res:Response)=>{
    
    const data:any = {
        title:"foo",
        body:"bar",
        UserId:1
    }
    const result = await Utils.addUser(data);
    res.send(result);
    // Utils.addUser(data)
    // res.send('add User');
})

app.listen(port,()=>{
    console.log('sever is '+port);
})