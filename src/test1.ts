import axios from "axios";
import { Utils } from "./Utils";


const unit_test = async() => {

    if (Utils.add(1, 2) === 3) {
        console.log(0)
    } else {
        console.log(1)
    }

    const data: any = {
        "name": "pop",
        "username": "iampop"
    }
    try{
        const response: any = await Utils.addUser(data);
        const correct_result: any = { "name": "pop", "username": "iampop" };
    
        const keys:string[] = Object.keys(correct_result);
        for(const k of keys){
            if(correct_result[k] !== response[k]){
                console.log("addUser" + k)
                return;
            }
        }
    }catch(error){
        console.log("addUser" + error);
    }
   

}
unit_test();