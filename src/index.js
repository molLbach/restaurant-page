import {intialPageLoad} from './home.js'
import {loadMenu} from './menu.js'
import {loadContact} from './contact.js'

intialPageLoad();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");
const content = document.querySelector("#content");

home.addEventListener("click",()=>{
    content.innerHTML = "";
    intialPageLoad();

});
menu.addEventListener("click",()=>{
    content.innerHTML = "";
    loadMenu();

})

contact.addEventListener("click",()=>{
    content.innerHTML = "";
    loadContact();

})



