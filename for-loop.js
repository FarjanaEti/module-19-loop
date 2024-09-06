// let sum=0;
// for(let i=1; i<=5; i++)
// {
//  sum=sum+i;
// //  console.log(num); 
// console.log(i);                              
// }
// console.log('sum=',sum)
 

// --------------odd even-----------------

// for(let i=0; i<=10; i++){
//      if(i%2===0){
//        console.log('even',i)                       
//      }    
//      if(i%2!==0){
//      console.log('odd',i)                             
//      }                     
// }

// ------------my--------
// for(let i=19; i<=25; i++)
// {
//   if(i%1===0 && i%2===0){
//  console.log('he is mine',i)   
// //   break;
//   }                       
// }
// ---------continue----
// for(let i=1; i<=10; i++){
//      if(i%2===1){
//         continue;                   
//      }           
//      console.log(i)               
// }
 
let n=0;
while(n<10){
   n++; 
    if(n%5!==0){
      continue;                        
    } 

    console.log(n);                          
}