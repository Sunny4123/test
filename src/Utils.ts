import axios from "axios";

function add(a:number,b:number){
    return a+b;
}
function calculate(a: number, b: number, operator: '+' | '-' | '*' | '/'): number | null {
    switch (operator) { 
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                console.error("Division by zero is not allowed.");
                return null;
            }
        default:
            console.error("Invalid operator.");
            return null;
    }
}



async function addUser(data:any){
    const response:any = await axios.post('https://jsonplaceholder.typicode.com/users',data);
    console.log(response.data);
    return response.data;
}
export const Utils = { addUser,add,calculate }