(
   async ()=>{
             try {
        let url="https://fakestoreapi.com/products";
        let responce= await fetch(url,{})
            let data=await responce.json();
            console.log(data);
            renderdata(data);
        
     } catch (error) {
        console.log(error);
        console.log("thik karo kuch problem h try me");
        
        
     }
})
();

function renderdata(data){
    //
}