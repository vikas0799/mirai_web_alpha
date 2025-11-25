let p1 = new Promise((resolve, reject) => {
      let arr=[23,45,567,34];
      let balance=2000;
      console.log("wait a second");
      
setTimeout(() => {
        // resolve("goarav");
        // reject("insufficient funds")

        resolve(`you can transfer , ${balance}`);
    }, 4000);
})

console.log(p1);
console.log("hi");

// p1.then(**).catch(**)

p1.then((data) => {
    console.log(data);
    // return New Promise();

}) .catch((error)=>{
    console.log(error);
    console.log("use paytm payLater");
    
})
console.log("bye");




// Promise(...).then().catch()
// Promise(...).then( return promise).ghen(.  return promise).then().catch()
