// setTimeout(() => {
//     console.log("login");
//     setTimeout(() => {
//         console.log("otp");
//         setTimeout(() => {
//             console.log("payment");
            
//         }, 4000);
//     }, 3000);
    
// }, 2000);

let cl1=setInterval(() => {
    console.log("hi");
    console.log("bye");
      
}, 2000);
let cl2=setInterval(() => {
    console.log("hi2");
    console.log("bye2");
    
    
}, 5000);

function clear1(){
    console.log("heloo");
    
clearInterval(cl1);
clearInterval(cl2);
}

