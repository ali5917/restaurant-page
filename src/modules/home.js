import img1 from '../images/img-1.png';
import img2 from '../images/img-2.png';
import img3 from '../images/img-3.png';

const loadHome = () => {
    const home = document.createElement("div");
    home.classList.add("home");
    
    const h1 = document.createElement("h1");
    h1.innerHTML = `we <span>create</span><br>tastes.`;
    
    home.appendChild(h1);
    home.appendChild(createEssenceContainer()); 
    
    

    document.getElementById("content").appendChild(home);
}

function createEssenceContainer () {    
    const essenceContainer = document.createElement("div");
    essenceContainer.classList.add("essence-cont");
    
    const head = document.createElement('p');
    head.classList.add("head");

    const grid = document.createElement("div");
    grid.classList.add("grid");

    const text1 = document.createElement("div");
    text1.classList.add("text-1");
    text1.innerHTML = `
        <p>An invitation to indulge in timeless French culinary artistry, Fioré offers a refined dining experience where every detail is considered.</p>
        <br>
        <p>From artfully plated entrées to delicate desserts, our menu is crafted to honor tradition while embracing innovation. Each dish tells a story — one of elegance, seasonality, and passion. Step into a world where flavor meets finesse, and every bite becomes a memory.</p>
    `;

    const text2 = document.createElement("div");
    text2.classList.add("text-2");
    text2.innerHTML = `
        <p>The lighting knows its cues, the wine never misses a note, and the flavors? They know how to make an entrance. Come hungry, leave enchanted, and maybe a little spoiled.</p>
    `;
    const imgCont = document.createElement("div");
    imgCont.classList.add("img-cont");

    const image1 = document.createElement("img");
    image1.src = img1;
    const image2 = document.createElement("img");
    image2.src = img2;
    const image3 = document.createElement("img");
    image3.src = img3;

    imgCont.appendChild(image1);
    imgCont.appendChild(image2);
    imgCont.appendChild(image3);
    text2.appendChild(imgCont);
    grid.appendChild(text1);
    grid.appendChild(text2);
    essenceContainer.appendChild(head);
    essenceContainer.appendChild(grid);
    
    return essenceContainer;
}

function createAmenitiesContainer () {
    const amenitiesContainer = document.createElement("div");
    amenitiesContainer.classList.add("amenities-cont");
    
    const head = document.createElement("p");
    head.classList.add("head");
    head.style.alignSelf = "center";

    const grid = document.createElement("div");
    
}

export default loadHome;