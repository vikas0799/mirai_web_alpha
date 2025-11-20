let depesh={
    "name":"depesh singh",
    "age":91,
    "dist":"mirzapur",
    //anonymys->currecnt object, arrow fn ->window obj
    "display":()=>{
        console.log("hi");
        console.log("bye");
       console.log(this);
    //    console.log(this.name);
       
        
    }
}

// // console.log(depesh.display);
depesh.display();

// console.log(window);
// console.log(this);
