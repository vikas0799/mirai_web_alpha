var aura=0;
  let head=document.querySelectorAll("h1");
function increase(){
    //reaction ka code
    console.log("hi");
    console.log("bye");
    aura++;
    console.log(aura);
    head[0].innerHTML=`Cart Count= ${aura}`;
    head[0].style.color="green";
}

function decrease(){
    if(aura>0){
        aura--;
    head[0].innerHTML=`Cart Count= ${aura}`;
    head[0].style.color="red";

    }
    else{
        aura=0;
    }

}