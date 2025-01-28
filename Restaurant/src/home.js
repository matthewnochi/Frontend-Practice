import homeFood from "./assets/homeFood.png";

const mainHome = document.createElement("div");

const img = document.createElement("img");
img.src = homeFood;
mainHome.appendChild(img);

const title = document.createElement("h1");
title.textContent = "Welcome to My Resturant";
mainHome.appendChild(title);

const desc = document.createElement("p");
desc.textContent = "This is my restaurant description. My restaurant has a home page, an about page, and a contact page";
mainHome.appendChild(desc);

export default mainHome;