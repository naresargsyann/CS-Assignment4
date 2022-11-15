

function gcd(num1,num2){
    let rem = num1 % num2;
   if(rem === 0){
   return num2;
   } else{
    num1 = num2;
    num2 = rem;
    return gcd(num1,num2);
   }
}
