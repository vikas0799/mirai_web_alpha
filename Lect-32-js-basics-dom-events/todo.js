function addtodo(){
    // console.log("hi");
   let input= document.querySelector("input");
    let li=document.createElement("li");
    //   li.innerHTML=input.value;
    li.innerHTML=`${input.value}    <button onclick="removetodo(this)">delete</button>`
      console.log(li);
     let ul=document.querySelector("ul");
     if(input.value==""){
        alert("bhai value to fill karde");
        return ;
     }
     ul.prepend(li);  
     input.value="";
} 


function removetodo(element){
    console.log("remo ");
    element.parentElement.remove();
    
}