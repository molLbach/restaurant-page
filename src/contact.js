export function loadContact (){

const content = document.querySelector("#content")
const contacttxt = document.createElement("h1");
contacttxt.textContent = "Call us at : 1234456778"
contacttxt.classList.add("dish1");
content.appendChild(contacttxt);

const placetxt = document.createElement("h1");
placetxt.textContent = "You can find us at tbon mok"
placetxt.classList.add("dish1");
content.appendChild(placetxt);

}