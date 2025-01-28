const mainMenu = document.createElement("div");
const title = document.createElement("h2");
title.textContent = "Menu: ";
mainMenu.appendChild(title);

const list = document.createElement("ul");
mainMenu.append(list);

const item1 = document.createElement("li");
item1.textContent = "Item 1";
list.appendChild(item1);

const item2 = document.createElement("li");
item2.textContent = "Item 2";
list.appendChild(item2);

const item3 = document.createElement("li");
item3.textContent = "Item 3";
list.appendChild(item3);

export default mainMenu;