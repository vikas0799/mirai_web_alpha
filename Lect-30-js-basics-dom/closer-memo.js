function fact(n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = ans * i;
    }
    return ans;
}


function memo(fn) {
    let cache = {};
    //  fn=fact
    console.log(fn);
    
    return (n)=> {
        if (cache[n]) {
            return `found data directly ${cache[n]}`;
        }
        else {
            let ans = fn(n);
            cache[n] = ans;
            return `not found recalculating .${cache[n]}`;
        }
    }
}

let Myfact = memo(fact);

//let cache={}
// fn=fact
// function (n) {
//         if (cache[n]) {
//             return cache[n];
//         }
//         else {
//             let ans = fn(n);
//             cache[n] = ans;
//             return cache[n];
//         }
//     }
// console.log(Myfact);
console.log(Myfact(5));
console.log(Myfact(5));


console.log(Myfact(3));
console.log(Myfact(3));



