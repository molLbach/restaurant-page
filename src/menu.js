
export function loadMenu() {
    const content = document.querySelector("#content");
    const dish1text = document.createElement("h1");
    dish1text.textContent = "check out this amazing this";
    dish1text.classList.add("dish1");
    content.appendChild(dish1text);
    
    const dish1img = document.createElement("img");
    dish1img.classList.add("dishh1img");     
    dish1img.src = "/src/assets/chicken1.jpg";
    content.appendChild(dish1img);
    
    const dish2text = document.createElement("h1");
    dish2text.textContent = "check out this 2 amazing this";
    dish2text.classList.add("dish1");
    content.appendChild(dish2text);

    const dish2img = document.createElement("img");
    dish2img.classList.add("dishh1img");     
    dish2img.src = "/src/assets/chicken2.jpg";
    content.appendChild(dish2img);
    
    const dish3text = document.createElement("h1");
    dish3text.textContent = "check out this 3 amazing this";
    dish3text.classList.add("dish1");
    content.appendChild(dish3text);

    const dish3img = document.createElement("img");
    dish3img.classList.add("dishh1img");     
    dish3img.src = "/src/assets/chicken3.jpg";
    content.appendChild(dish3img);
}
