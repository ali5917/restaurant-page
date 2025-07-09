import img1 from "../images/menu/one.png"; 
import img2 from "../images/menu/two.png"; 
import img3 from "../images/menu/three.png"; 
import img4 from "../images/menu/four.png"; 
import img5 from "../images/menu/five.png"; 

const loadMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createGrid());
    menu.appendChild(createMenuSection('entrées.', 'starters', starters));
    menu.appendChild(createMenuSection('maison.', 'mains',  mains));
    menu.appendChild(createMenuSection('délices.', 'desserts', desserts));

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
    item.classList.add("item");

    const nameP = document.createElement('p');
    nameP.className = 'name';
    nameP.textContent = name;

    const detailsP = document.createElement('p');
    detailsP.className = 'details';
    detailsP.textContent = details;

    item.append(nameP, detailsP);
    return item;
}

function createMenuSection (title, name, itemsArray) {
    const section = document.createElement("div");
    section.classList.add(name, "menu-part");

    const head = document.createElement("h1");
    head.classList.add("head");
    head.textContent = title;

    const items = document.createElement("div");
    items.classList.add("items");

    itemsArray.forEach(({name, details}) => {
        items.appendChild(createMenuItem(name, details));
    })

    section.append(head, items);
    return section;
}

const starters = [
        {
            name: 'Foie Gras au Torchon',
            details: 'Duck liver cured in cognac and sea salt, served with brioche toast and fig marmalade.',
        },
        {
            name: 'Carpaccio de Saint-Jacques',
            details: 'Thinly sliced scallops with lemon oil, caviar pearls, and microgreens.',
        },
        {
            name: 'Soupe à l’Oignon Gratinée',
            details: 'Classic French onion soup baked with Gruyère and herb croutons.',
        },
        {
            name: 'Tartare de Saumon',
            details: 'Hand-chopped Atlantic salmon, avocado, yuzu crème fraîche, and chive oil.',
        },
    ];

const mains = [
    {
        name: 'Filet de Bœuf Rossini',
        details: 'Tenderloin of beef, pan-seared foie gras, black truffle jus, and pomme purée.',
        },
    {
        name: "Canard à l'Orange Moderne",
        details: 'Crispy duck breast glazed with burnt orange reduction, fennel purée, and spiced jus.',
    },
    {
        name: 'Coquilles Saint-Jacques Rôties',
        details: 'Pan-roasted scallops with saffron beurre blanc, seaweed crumb, and baby leeks.',
    },
    {
        name: 'Ravioles de Homard',
        details: 'Lobster-stuffed ravioli in a bisque emulsion with a hint of lemon zest.',
    },
];

const desserts = [
    {
        name: 'Crème Brûlée Madagascar',
        details: 'Classic vanilla bean custard with a perfectly crisp caramel top.',
    },
    {
        name: 'Tarte Chocolat Noir',
        details: 'Bitter dark chocolate tart with sea salt and hazelnut praline.',
    },
    {
        name: 'Mille-Feuille Pistache',
        details: 'Crisp puff pastry layered with pistachio cream and fresh raspberries.',
    },
    {
        name: 'Soufflé Grand Marnier',
        details: 'Light orange soufflé served with warm vanilla crème anglaise.',
    },
];

export default loadMenu;