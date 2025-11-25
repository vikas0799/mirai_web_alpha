//   fetch(url).then(. return promise).then(data-object).catch()

// fetch('https://fakreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch((error)=>console.log(error)
//   );
// let productarr;
fetch('https://fakestoreapi.com/products')
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then((data) => {
        console.log(data);
        //redering objectes DOM
        // productarr=data;

     display(data)
    })
    .catch((error) => console.log(error)
    );


 function display(productarr){
document.querySelector("h1")
    .innerHTML=`${productarr[0].title}`

 }
    