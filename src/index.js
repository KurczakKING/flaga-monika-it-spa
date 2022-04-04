import { style } from "./css/index.scss";
import "bootstrap";
import { Home } from "./views/Home";
import { Nav } from "./navigation/Nav";
//import { RoomList } from "./views/RoomsList";

let $ = require("jquery");
window.jQuery = $;
window.$ = $;

const main = document.querySelector("main");
main.before(Nav());
main.append(Home());

document.body.addEventListener("navigate", (event) => {
  const { detail: Component } = event;
  main.innerHTML = "";
  main.append(Component());
});
