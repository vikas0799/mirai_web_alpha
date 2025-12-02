function sum(a){
    console.log("hi");
    console.log("bye");
    console.log(a);
    a();

    console.log("payment task");
    
    return a;
}
let x=(p)=>{
    // for(let i=0;i<10;i++){
    //     console.log(i);
        
    // }
    // p();
    console.log("login async task");
    
    console.log(p);
    // p();
    return p;
};
let ans=sum(x(()=>{
    console.log("otp verifucation");
    // for(let i=0;i<10;i++){
    //     console.log(i);
        
    // }

}));

