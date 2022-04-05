//import { Button } from "bootstrap";
import { Home } from "../views/Home";
import { Button } from "../common/Button";
import { RoomsList } from "../views/RoomsList";
//import { TreatmentsList } from "../views/TreatmentsList";
//import { Cart } from "../views/Cart";

const navItems = [
  { name: "Home", component: Home },
  { name: "Rooms", component: RoomsList },
  { name: "Treatments"/*, component: TreatmentsList */},
  { name: "🛒"/*, component: Cart */},
];

export function Nav() {
  const nav = document.createElement("nav");
  nav.style.backgroundColor = "ffff00";

  const navButtons = navItems.map((item) => {
    return Button({
      text: item.name,
      classes: "btn btn-warning",
      onClick: (event) => {
        const siblings = event.target.parentElement.children;
        Array.from(siblings).forEach((element) => {
          element.classList.remove("btn-active");
        });
        event.target.classList.add("btn-active");

        const customEvent = new CustomEvent("navigate", {
          detail: item.component,
        });

        document.body.dispatchEvent(customEvent);
      },
    });
  });

  navButtons[0].classList.add("btn-active");
  nav.append(...navButtons);
  return nav;
}
