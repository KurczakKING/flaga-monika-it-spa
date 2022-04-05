import { RoomsListItem } from './RoomsListItem'
//import './database.json';

export function RoomsList() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Rooms List</h2>
    <header>Loading...</header>
  `;

  //fetch("./database.json")
  fetch(`https://localhost:9000/rooms`)
    .then((response) => response.json())
    .then((rooms) => {
      const ul = document.createElement("ul");
      const lis = rooms.map((room) => RoomsListItem(room));

      ul.append(...lis);
      section.querySelector("header").remove();
      section.append(ul);
    });

  return section;
}
