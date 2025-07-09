import img1 from '../images/img-1.png';
import img2 from '../images/img-2.png';
import img3 from '../images/img-3.png';

const loadHome = () => {
    const home = document.createElement("div");
    home.classList.add("home");
    
    const h1 = document.createElement("h1");
    h1.innerHTML = `we <span>create</span><br>tastes.`;
    
    const orderBtn = document.createElement("button");
    orderBtn.classList.add("orderBtn");
    orderBtn.textContent = "Order Now";
    
    
    home.appendChild(h1);
    home.appendChild(createEssenceContainer()); 
    home.appendChild(createAmenitiesContainer()); 
    home.appendChild(orderBtn);
    
    
    document.getElementById("content").appendChild(home);
}

function createEssenceContainer () {    
    const essenceContainer = document.createElement("div");
    essenceContainer.classList.add("essence-cont");
    
    const head = document.createElement('p');
    head.textContent = "essence.";
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
    head.textContent = "amenities.";
    head.classList.add("head");
    head.style.alignSelf = "center";

    const grid = document.createElement("div");
    grid.classList.add("grid");

    const amenities = [
        {label: "Internet Access", icon: internetSVG, className: "one"},
        {label: "Air Conditioning", icon: acSVG, className: "two"},
        {label: "Heating", icon: heatingSVG, className: "three"},
        {label: "Balcony", icon: balconySVG, className: "four"},
        {label: "Beach", icon: beachSVG, className: "five"},
        {label: "Flat TV", icon: TVSVG, className: "six"},
    ];

    amenities.forEach(({label, icon, className}, index) => {
        const item = document.createElement("div");
        item.classList.add("grid-item", className);
        item.innerHTML = `${icon}<p>${label}</p>`;
        grid.appendChild(item);
    })

    amenitiesContainer.appendChild(head);
    amenitiesContainer.appendChild(grid);
    return amenitiesContainer;
}

const internetSVG = `<svg class="brxe-svg" id="brxe-ixgsdq" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" style="display: block; height: 50px; width: 50px; fill: currentcolor;" width="32" height="32"><path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z" fill="#222222"></path></svg>`;
const acSVG = `<svg class="brxe-svg" id="brxe-zhoryv" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" style="display: block; height: 50px; width: 50px; fill: currentcolor;" width="32" height="32"><path d="M17 1v4.03l4.03-2.32 1 1.73L17 7.34v6.93l6-3.47V5h2v4.65l3.49-2.02 1 1.74L26 11.38l4.03 2.33-1 1.73-5.03-2.9L18 16l6 3.46 5.03-2.9 1 1.73L26 20.62l3.49 2.01-1 1.74L25 22.35V27h-2v-5.8l-6-3.47v6.93l5.03 2.9-1 1.73L17 26.97V31h-2v-4.03l-4.03 2.32-1-1.73 5.03-2.9v-6.93L9 21.2V27H7v-4.65l-3.49 2.02-1-1.74L6 20.62l-4.03-2.33 1-1.73L8 19.46 14 16l-6-3.46-5.03 2.9-1-1.73L6 11.38 2.51 9.37l1-1.74L7 9.65V5h2v5.8l6 3.47V7.34l-5.03-2.9 1-1.73L15 5.03V1z" fill="#222222"></path></svg>`;
const heatingSVG = `<svg class="brxe-svg" id="brxe-qjibqr" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" style="display: block; height: 50px; width: 50px; fill: currentcolor;" width="32" height="32"><path d="M16 0a5 5 0 0 1 5 4.78v12.98l.26.21a7.98 7.98 0 0 1 2.72 5.43l.02.3v.3a8 8 0 1 1-13.25-6.04l.25-.2V5A5 5 0 0 1 15.56.02l.22-.01zm0 2a3 3 0 0 0-3 2.82V18.78l-.43.3a6 6 0 1 0 7.06.15l-.2-.16-.43-.3V11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.13A4 4 0 0 1 16 28a4 4 0 0 1-1-7.87V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="#222222"></path></svg>`;
const balconySVG = `<svg class="brxe-svg" id="brxe-bvlpli" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" style="display: block; height: 50px; width: 50px; fill: currentcolor;" width="32" height="32"><path d="M23 1a2 2 0 0 1 2 1.85V19h4v2h-2v8h2v2H3v-2h2v-8H3v-2h4V3a2 2 0 0 1 1.85-2H9zM9 21H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-10-8H9v6h6zm8 0h-6v6h6zM15 3H9v8h6zm8 0h-6v8h6z" fill="#222222"></path></svg>`;
const beachSVG = `<svg class="brxe-svg" id="brxe-jpzbyv" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" style="display: block; height: 50px; width: 50px; fill: currentcolor;" width="32" height="32"><path d="M24 27c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 29c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 29c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 29c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 27c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 27c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 27zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 24c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 24c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 24c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 22c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 22c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 22zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 19c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 19c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 19c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 17c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 17c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 17zM16 1a9 9 0 0 1 8.76 11.07c.71.13 1.37.45 1.91.94.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1 1.95 1.95 0 0 0-1.14-.5H23.96a2 2 0 0 0-1.15.38l-.14.11A3.98 3.98 0 0 1 20 15.5a3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 14c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1 1.95 1.95 0 0 0-1.14-.5H7.96a2 2 0 0 0-1.15.38l-.14.11a3.96 3.96 0 0 1-2.44 1L4 15.5v-2h.19a1.95 1.95 0 0 0 1.14-.5 3.92 3.92 0 0 1 1.9-.93A9 9 0 0 1 16 1zm0 2a7 7 0 0 0-6.64 9.23c.49.17.93.43 1.31.78.35.32.83.49 1.33.49.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 12c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5a2 2 0 0 0 1.2-.38l.13-.11c.38-.35.82-.6 1.3-.78A7 7 0 0 0 16 3z" fill="#222222"></path></svg>`;
const TVSVG = `<svg class="brxe-svg" id="brxe-hafuap" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" style="display: block; height: 50px; width: 50px; fill: currentcolor;" width="32" height="32"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-5-4.78V8a5 5 0 0 1 4.78-5H26a5 5 0 0 1 5 4.78V20a5 5 0 0 1-4.78 5H21v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-3 2.82V20a3 3 0 0 0 2.82 3H26a3 3 0 0 0 3-2.82V8a3 3 0 0 0-2.82-3z" fill="#222222"></path></svg>`;

export default loadHome;