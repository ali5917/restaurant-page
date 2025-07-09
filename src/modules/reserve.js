const loadReserve = () => {
    const reserve = document.createElement("div");
    reserve.classList.add("reserve");

    const head = document.createElement("div");
    head.classList.add("head");

    const h1 = document.createElement("h1");
    h1.textContent = "reserve.";
    const p = document.createElement("p");
    p.textContent = "Invités appréciés — Guests cherished"; 

    head.appendChild(h1);
    head.appendChild(p);
    
    reserve.appendChild(head);
    reserve.appendChild(createForm());

    document.getElementById("content").appendChild(reserve);
}

function createInput (type, name, placeholder, min, max) {
    const inputContainer = document.createElement("input");
    inputContainer.type = type;
    inputContainer.name = name;
    inputContainer.placeholder = placeholder;
    if (min !== undefined && max !== undefined) {
        inputContainer.min = min;
        inputContainer.max = max;
    }
    inputContainer.required = true;
    return inputContainer;
}

function createTextArea (name, rows, cols, placeholder) {
    const textArea = document.createElement("textarea");
    textArea.name = name;
    textArea.placeholder = placeholder;
    textArea.rows = rows;
    textArea.cols = cols;
    return textArea;
}

function createForm () {
    const form = document.createElement("form");
    const insideDiv = document.createElement("div");
    insideDiv.classList.add("inside-1");
    insideDiv.appendChild(createInput("email", "email", "Email*"))
    insideDiv.appendChild(createInput("tel", "phone", "Phone*"))
    
    const button = document.createElement("button");
    button.classList.add("submitBtn");
    button.type = "submit";
    button.textContent = "Reserve Table";

    form.appendChild(createInput("text", "name", "Full Name*"));
    form.appendChild(insideDiv);
    form.appendChild(createInput("date", "date", "Date*"));
    form.appendChild(createInput("time", "time", "Time*"));
    form.appendChild(createInput("number", "guests", "Number of Guests*"));
    form.appendChild(createTextArea("requests", 4, 40, "Preferences"))
    form.appendChild(button);

    form.addEventListener("submit", handleFormSubmit);

    return form;
}

function handleFormSubmit (e) {
    e.preventDefault();
    const submitBtn = document.querySelector(".submitBtn");
    submitBtn.textContent = "Table Reserved!";
    submitBtn.classList.add("reserved");
    
    const form = e.target;
    form.classList.add("form-disabled");
}

export default loadReserve;