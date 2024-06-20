let rows = 8;

let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= (rows+1) - n; num++) {
      pattern += num;
   }
   pattern += "\n";
}
console.log(pattern);