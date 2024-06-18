let L5_1 = document.querySelector("#L5_1");
let L5_2 = document.querySelector("#L5_2");
let L5_3 = document.querySelector("#L5_3");
let L5_4 = document.querySelector("#L5_4");
let L5_5 = document.querySelector("#L5_5");


//1. Lav en async funktion der kan fetche ved at tage imod en URL som argument
function fetchThis() {
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(console.log);
}
fetchThis()

//2. Lav et fetch fra ([dummyjson](https://dummyjson.com/docs)) der henter en liste af produkter og vis dataen i DOM´en
function fetchData() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayThis(data);
        });

    function displayThis(data) {
        const productLists = document.createElement('div')
        data.products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.innerHTML = `<h3>${product.title}</h3><p>${product.description}</p>`;
            productLists.appendChild(productItem);

        });

        L5_2.appendChild(productLists)
    }
}
fetchData()

//3. Lav en funktion der kan poste en ny bruger ([dummyjson](https://dummyjson.com/docs)) og vis en besked i DOM´en alt efter om det lykkedes eller fejlede.
function fetchAddUser(userData) {
    fetch('http://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(console.log)
        .catch(displayError(Error));

    function displayError() {
        const errorDiv = document.createElement('div')
        errorDiv.innerHTML = Error;
        L5_3.appendChild(errorDiv)
    }
}

fetchAddUser({
    firstName: 'Mickey', lastName: 'Mouse', age: 23,
});

//4. Indbyg error handling i din async fetch funktion
async function fetchData4() {
    try {
        const response = await fetch('https://dummyjson.com/carts');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('this is data from function: fetchData4()',data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData4();

//5. Tilføj argumenter til din funktion der gør at du kan sende en URL og en body med ind i den, samt en metode (GET, POST, PUT osv.).




