let L3_1 = document.querySelector("#L3_1");
let L3_2 = document.querySelector("#L3_2");
let L3_3 = document.querySelector("#L3_3");
let L3_4 = document.querySelector("#L3_4");
let L3_5 = document.querySelector("#L3_5");


const classArray = ['Makka', 'Elena', 'Mathias', 'Peter', 'Christian'];

function displayClassNames() {
    for (let i = 0; i < classArray.length; i++) {
        let newElement = document.createElement('p');
        newElement.innerText = classArray[i];
        L3_1.appendChild.newElement;
    }
}

displayClassNames()