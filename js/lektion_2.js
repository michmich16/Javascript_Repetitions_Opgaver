
let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");


//1. Lav en funktion der kan tjekke om en værdi (argumentet) er en string eller et tal og vise det i DOM´en. Det skal gerne ende ud i at der eks. står: 123 er af typen: number, i DOM´en.
function checkInputValue() {
    let inputElm = document.createElement('input');
    inputElm.type = 'text';
    inputElm.placeholder = 'Input something';

    let msgElm = document.createElement('p');

    inputElm.addEventListener('input', () => {
        let value = inputElm.value;
        let type = !isNaN(value) ? 'number' : 'string';
        let msg = `${value} is a ${type}`;

        msgElm.textContent = msg;
    });

    L2_1.appendChild(inputElm);
    L2_1.appendChild(msgElm);
}

//2. Lav en funktion der kan tjekke om en email er korrekt (indeholder @ og slutter på .com/.dk/osv.)

//3. Lav en funktion der kan tjekke om længden på en string er længere end eller lig med 2 bogstaver

//4. Lav en funktion der kan give os et tilfældigt tal, mellem to input argumenter, eks. mellem 4 og 32. Tilføj en button til HTML´en og lav en onclick der kalder din funktion. Til slut skal følgende besked vises for brugeren: Vores tilfældige tal mellem _startværdi_ og _slutværdi_ er: _randomværdi_ `;

//5. Lav en funktion der returnerer en tilfældig RGB farve værdi og tildel denne til et element du opretter, når brugeren klikker på en knap.
