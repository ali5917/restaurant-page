import img1 from "../images/menu/one.png"; 
import img2 from "../images/menu/two.png"; 
import img3 from "../images/menu/three.png"; 
import img4 from "../images/menu/four.png"; 
import img5 from "../images/menu/five.png"; 

const loadMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createGrid());
    

    document.getElementById("content").appendChild(menu);
}

function createGrid () {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    
    const images = [
        { src: img1, class: "featured" },
        { src: img2 },
        { src: img3, style: "border-top-right-radius: 50px;" },
        { src: img4 },
        { src: img5, style: "border-bottom-right-radius: 50px;" },
    ];

    images.forEach(image => {
        const img = document.createElement("img");
        img.src = image.src;
        if (image.class) img.classList.add(image.class);
        if (image.style) img.style.cssText = image.style;
        grid.appendChild(img);
    })

    return grid;
}

function createMenuItem (name, details) {
    const item = document.createElement("div");
    item.classList.add()
}

function createMenuSection (title, name, itemsArray) {

}



export default loadMenu;