const sum = require("./test").sum;
console.log(sum(2, 3));

let heading = document.querySelector("#test"),
  sumValue = sum(2, 3);
heading.innerHTML = `2 + 3 = ${sumValue}`;
