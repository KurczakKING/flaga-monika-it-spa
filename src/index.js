import { style } from "./css/index.scss";
import "bootstrap";
import { Home } from "./views/Home";
import { RoomsList } from "./views/RoomsList";
import { Nav } from "./navigation/Nav";

/*let $ = require("jquery");
window.jQuery = $;
window.$ = $;*/

const main = document.querySelector("main");
main.before(Nav());
main.append(Home());

document.body.addEventListener("navigate", (event) => {
  const { detail: Component } = event;
  main.innerHTML = "";
  main.append(Component());
});
