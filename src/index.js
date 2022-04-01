const sum = require("./test").sum;
console.log(sum(2, 3));

let heading = document.querySelector("#test"),
  sumValue = sum(2, 3);
heading.innerHTML = `2 + 3 = ${sumValue}`;

import { style } from "./css/index.scss";
import Icon from "./assets/img/test.jpg";

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("div-color");
