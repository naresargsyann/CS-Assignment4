
//point1

function factorial(n){
let result = 1;
for(let i = n; i > 0; i--){
    result = result * i;
}
console.log(result);
}

//point2
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



//point3
function lcm(num1,num2){
let lcm = num1 * num2 / gcd(num1,num2);
 console.log(lcm);
 return lcm;
}



//point4

function hecToDex(num){
    let rem = " ";
    let result = " ";
    let array = ["A", "B", "C", "D", "E", "F"]
   while(num > 0){
    rem = rem + num % 16;
    num = Math.floor(num/16);
    if(rem > 9){
        rem = array[rem - 10];
    }
   }
   let index = rem.length - 1;
while (index >= 0) {
    result += rem[index];
    index--;
}
console.log(result)
}



module.exports = {
    factorial: factorial,
    gcd: gcd,
    lcm: lcm,
    hecToDex: hecToDex
}

