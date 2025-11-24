// let main = document.querySelector("main");
// let fullnmae = "depesh singh";
// main.innerHTML="<h1> hiiiii </h1> <p> mirai school </p>";
// main.innerHTML=`<h1> hiiiii </h1> ${fullnmae}<p> mirai school </p>`;


// let arr = [15, 24, 78, 90, 45, 36];
// main.innerHTML=`my perecentage ${arr[0]}`
// main.innerHTML=`my perecentage ${arr[1]}`


// main.innerHTML=`${arr}`
// main.innerHTML = arr.map((Element) => {
//     return `
//     <section>
//        <h1>percentage : ${Element}</h1>
//        <p> msot</p>
//     </section>
//     `
// }).join("")


let studentdata=
[
    {
       fname:"depsh singh",
       age:21,
       school:"ogs dehradun",
       college:"MSOT",
       profile_image:".......",
       payment:"unpaid",
       hostel:"unpaid",
       percentage:65
    },
    {
      fname:" akshita saxena",
       age:20,
       school:"sms delhi",
       college:"MSOT",
       profile_image:".......",
       payment:"paid",
       hostel:"unpaid",
       percentage:55
    },
    {
        fname:"jiya kausik",
       age:20,
       school:"sms delhi",
       college:"MSOT",
       profile_image:".......",
       payment:"paid",
       hostel:"unpaid",
       percentage:67
    },
    {
       fname:"shivam kumar",
       age:20,
       school:"army public school delhi",
       college:"MSOT",
       profile_image:".......",
       payment:"paid",
       hostel:"unpaid",
       percentage:12
    },
    {
    fname:"onik singh",
       age:20,
       school:"spf hariyana",
       college:"MSOT",
       profile_image:".......",
       payment:"paid",
       hostel:"unpaid",
       percentage:18
    }
]

let main = document.querySelector("main");

main.innerHTML = studentdata.map((Element) => {
    return `
    <section>
    <h1> student_name: ${Element.fname} </h1>
     <h1> age: ${Element.age}</h1>
     <p> school : ${Element.school} <p>
     <p> college : ${Element.college}
    <img scr=${Element.profile_image}>
    <h1> paymewnt :${Element.payment}<h1>
    </section>
    `
}).join("")