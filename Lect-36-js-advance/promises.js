let p1=new Promise((resolve, reject)=>{
    // console.log("async task.... ");

    setTimeout(() => {
        let balance=90;
    // resolve("task 1 done");
    // resolve(balance)
    reject("error 404 in task1");
        
    }, 2000);
})
// console.log(p1);
// console.log(typeof(p1));

p1.then((data)=>{
    console.log(data);
    let newp1=new Promise((res,rej)=>{

   setTimeout(() => {
        res("task2 completed")
    
   }, 3000);

        })
    return newp1;
    
}).then((data2)=>{
    console.log(data2);
    
})
.catch((error)=>{
    console.log(error);
    
})


//.  x.then(...).catch()
