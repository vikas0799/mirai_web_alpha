// let arr=[1,12,5,8,9];

//     let ans=arr.filter((Element,index,arr)=>{
//         if(Element%2==0){
//             return true;
//         }
//         else{
//             return false;
//         }
//     })

//     console.log(ans);
    

// let ans=arr.map((Element,index, arr)=>{
//     console.log(Element,index,arr);
    
//     // return Element*3
//     if(Element%2==0){
//         return Element*2;
//     }
//     else{
//         return 3*Element
//     }
// })

// console.log(ans);


let arr=[5,12,5,8,9];
        // reduce(Callback,accumulator-initial-value)
// let ans=arr.reduce(callback,0)
let ans=arr.reduce((acc,Element,index,arr)=>{
    console.log(acc,Element,index,arr);
    // acc=acc+Element;
    if(acc<Element)
        acc=Element;
    return acc;
    
},arr[0]);

console.log(ans);
