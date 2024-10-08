import { Utils } from "./Utils";

// if(Utils.add(1,2) === 6)
// {
//     console.log('Test passed: 1 + 1 = 2'); // Success message
// }else{
//     console.log('Test failed: 1 + 1); // Failure message');
// }

// test.js


let allTestsPassed = true;

if (Utils.calculate(1, 1, '+') === 2) {
    console.log('Test passed: 1 + 1 = 2'); // Success message
} else {
    console.log('Test failed: 1 + 1'); // Failure message
    allTestsPassed = false;
}

if (Utils.calculate(5, 3, '-') === 2) {
    console.log('Test passed: 5 - 3 = 2');
} else {
    console.log('Test failed: 5 - 3');
    allTestsPassed = false;
}

if (Utils.calculate(3, 4, '*') === 12) {
    console.log('Test passed: 3 * 4 = 12');
} else {
    console.log('Test failed: 3 * 4');
    allTestsPassed = false;
}

if (Utils.calculate(10, 2, '/') === 5) {
    console.log('Test passed: 10 / 2 = 5');
} else {
    console.log('Test failed: 10 / 2');
    allTestsPassed = false;
}

if (!allTestsPassed) {
    process.exit(1); // Exit with a failure code if any test failed
}
