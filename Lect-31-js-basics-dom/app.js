// let main=document.querySelectorAll("main");
// console.log(main);

// main[0].style.color="red";
// main[0].style.backgroundColor="blue";
// main[0].style.fontSize="50px"


// main[0].classList.add("dark");

// let ul=document.querySelectorAll("ul");
// ul[0].classList.remove("dark");
// ul[0].classList.toggle("dark");


// let head=document.querySelectorAll("h1");
// console.log(head);
// head[1].innerHTML="depesh.           patel";
// head[1].innerText="depesh singh";
// head[2].textContent="depesh singh";


// let img=document.querySelectorAll("img");

// img[0].setAttribute("src","background.jpeg");
// img[0].setAttribute("alt","shreya");

// img[0].removeAttribute("alt");
// img[0].remove();





//creating h1
let head=document.createElement("h1");
head.innerHTML="mirai school of technology";
console.log(head);

//access main
let main=document.querySelectorAll("main")
// main[0].append(head);
// main[0].prepend(head);
// main[0].before(head);
main[0].after(head);







