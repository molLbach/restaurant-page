
export function intialPageLoad(){
    const contentdiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Creating Masterpieces since 1661"
    heading.classList.add("heading");
    contentdiv.appendChild(heading);

    const plate = document.createElement("img");
    plate.classList.add("creveta");
    plate.src = "/src/assets/creveta.jpg";
    contentdiv.appendChild(plate);
    
    const p1 = document.createElement("p");
    p1.classList.add("p1");
    p1.textContent = "The finest dining available at newyork, come on over any time and enjoy our masterpieces!"
    contentdiv.appendChild(p1);

    const p2 = document.createElement("p");
    p2.classList.add("p2");
    p2.textContent = "You can check our menus and get more info by checking out the navigation bar at the top" ;
    contentdiv.appendChild(p2);

    const p3 = document.createElement("p");
    p3.classList.add("p2");
    p3.textContent = "That goes without saying but attires are mandatory!" ;
    contentdiv.appendChild(p3);

}

