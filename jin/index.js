const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
let name ="";
let age ="";

// rl.question("what your name is",(answer) => {
//     name = answer;
//     rl.question("what your age is",(answer) => {
//             age = answer;
//         console.log("your name is:",name);
//         console.log("your age is:",age);
       
//     });
// })
let w ="";
let h ="";
let bmi = "";
 rl.question("enter your w",(answer) => {
    w = answer;
    rl.question("enter your h",(answer) => {
        h = answer/100;
        bmi = w/(h*h);
        console.log("you bmi is",bmi);
    });
});

