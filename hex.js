
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