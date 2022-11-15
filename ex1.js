
let num = 5;
let text = "";
for (let ind = 1; ind <= num; ind++) {

  for (let space = 0; space < num - ind; space++) {
       text += " ";
  }

  for (let plus = 0; plus < ind; plus++) {
   text += "+";
  }
  text += "\n";
}
console.log(text);