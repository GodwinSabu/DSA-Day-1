let rows =5

let pattern = ""
for(i=1; i<=rows; i++){
    for (let num = 1; num <= i; num++) {
        pattern += num;
     }
       pattern += "\n";
  }
  console.log(pattern);