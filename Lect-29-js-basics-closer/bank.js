function openbankaccount(){
   let balance=0;
   function deposite(amount){
    balance=balance+amount;
    console.log(`updated balance is = ${balance}`);
   }
   function withdrawl(amount){
    if(balance >=amount+5){
        balance=balance-amount-5;
    console.log(` thank you! updated balance is = ${balance}`);
    }
    else{
        console.log(`insufficient balance ${balance} , kami=${amount+5-balance}`);
    }
   }
   return {deposite,withdrawl};
}

let anjali=openbankaccount();
console.log(anjali);
anjali.deposite(2000);
anjali.withdrawl(500);
anjali.withdrawl(3000);


let siya=openbankaccount();
siya.deposite(1000);
siya.withdrawl(1000);