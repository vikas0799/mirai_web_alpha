function creraterCounter(){
    let cnt=0;
    let a=0;
    function Counter(){
    // let cnt=0;

        cnt++;
        a=a+100;
        console.log(cnt,a);
    }
    return Counter;
}

let ans=creraterCounter();
// ans=function Counter(){
//         cnt++;
//         console.log(cnt);
//     }

ans();
ans();
ans()
// console.log(ans);



let depesh=creraterCounter();
depesh();
depesh();