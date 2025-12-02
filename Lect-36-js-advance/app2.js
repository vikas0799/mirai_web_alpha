let cl1=setTimeout(() => {
    console.log("task1");
    
}, 5000);


setTimeout(() => {
clearTimeout(cl1);
console.log("task2");

}, 2000);