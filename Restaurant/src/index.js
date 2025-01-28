import mainHome from "./home.js";
import mainMenu from "./menu.js";
import mainContact from "./contact.js";

const content = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

content.appendChild(mainHome);

homeButton.addEventListener("click", function(){
    content.removeChild(content.firstElementChild);
    content.appendChild(mainHome);
})

menuButton.addEventListener("click", function(){
    content.removeChild(content.firstElementChild);
    content.appendChild(mainMenu);
})

contactButton.addEventListener("click", function(){
    content.removeChild(content.firstElementChild);
    content.appendChild(mainContact);
})