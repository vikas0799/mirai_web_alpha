// async function banking(){
//    // await login.   
//    //balance print
//    //transfer
//    //
//    //
//    //transfer
//    //

// }


async function dataFetching() {
  try {
    console.log("welcome");
        let url="https://fakestoreapi.com/products";
        let responce= await fetch(url,{})
            let data=await responce.json();
            console.log(data);
        //   data=  data.filter((Element)=>{
        //         if(Element.category==="electronics")
        //             return true;
        //         else
        //             return false;
        //     })
            renderdata(data);
        
     } catch (error) {
        console.log(error);
        console.log("thik karo kuch problem h try me");
        
        
     }
    console.log("transfer");
    
}
// function renderdata(data){
//     const container = document.getElementById("container");

// }

dataFetching();