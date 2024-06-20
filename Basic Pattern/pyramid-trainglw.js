let rows = 5;

let pattern = "";

for (let n = 1; n <= rows; n++) {
   // Inner Loop - 1
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }

   // Inner Loop -2
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);