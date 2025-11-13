// function outer(){
//     // let count=24;
//     let count=()=>{
//         console.log("hello");
        
//     }


//     return count;
// }


// let ans=outer();
// console.log(ans);





let display=(callback)=>{
    console.log(callback);
//     x=()=>{
//     console.log("suryansh");
//     for(let i=9;i<12;i++){
//         console.log(i);
        
//     }
    
// }
    // x();  x ke ander jo fun h usko execute kar diya
    callback();
     return callback;
}
// let a=23;
let a=()=>{
    console.log("suryansh");
    for(let i=9;i<12;i++){
        console.log(i);
        
    }
    
}
let ans=display(a);





// function solve(()=>{
//     console.log("hello");
// });


// let arr=[1,2,3,4,5];
// arr.map();