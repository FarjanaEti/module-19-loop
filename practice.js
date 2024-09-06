// Display sum of all the odd numbers from 81 to 131.
let num=81;
sum=0;
while(num<=131){
// console.log(num);
    num++;  
    if(num%2!==0){
//  console.log(num)
 sum=sum+num;
    }                                             
}
// console.log(sum)

// Implement a countdown timer that counts down from 21 to 15.

let count=21;
while(count>=15){
     count--;
     console.log(count);                         
}
console.log('countdown stop');