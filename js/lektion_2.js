
let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");


//1. Lav en funktion der kan tjekke om en værdi (argumentet) er en string eller et tal og vise det i DOM´en. Det skal gerne ende ud i at der eks. står: 123 er af typen: number, i DOM´en.
function checkInputValue() {
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'write something';

    const messageElement = document.createElement('p');

    inputElement.addEventListener('input', () => {
        const value = inputElement.value;
        const type = !isNaN(value) ? 'number' : 'string';
        const msg = `${value} is a ${type}`;

        messageElement.textContent = msg;
    });

    L2_1.appendChild(inputElement);
    L2_1.appendChild(messageElement);
}

checkInputValue()

//2. Lav en funktion der kan tjekke om en email er korrekt (indeholder @ og slutter på .com/.dk/osv.)
function checkEmail() {
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.placeholder = 'Din Email';

    const errorMessage = document.createElement('div');
    errorMessage.style.color = 'red';
    errorMessage.style.display = 'none';
    errorMessage.textContent = 'Emailen er ikke korrekt';

    emailInput.addEventListener('input', () => {
        const emailValue = emailInput.value;
        if (!isValidEmail(emailValue)) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });

    L2_2.appendChild(emailInput);
    L2_2.appendChild(errorMessage);
}

function isValidEmail(email) {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

checkEmail();


//3. Lav en funktion der kan tjekke om længden på en string er længere end eller lig med 2 bogstaver
function checkStringLength() {
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'write here lol';

    const warningOutput = document.createElement('p');

    inputElement.addEventListener('input', () => {
        let userInput = inputElement.value.trim();
        if (userInput.length > 2) {
            warningOutput.innerText = 'input is longer than 2'
        } else if (userInput.length == 2) {
            warningOutput.innerText = 'input is equal to 2'
        } else {
            warningOutput.innerText = 'input is shorter than 2'
        }
    })
    L2_3.appendChild(warningOutput)
    L2_3.appendChild(inputElement)
}
checkStringLength()
//4. Lav en funktion der kan give os et tilfældigt tal, mellem to input argumenter, eks. mellem 4 og 32. Tilføj en button til HTML´en og lav en onclick der kalder din funktion. Til slut skal følgende besked vises for brugeren: Vores tilfældige tal mellem _startværdi_ og _slutværdi_ er: _randomværdi_ `;
function getRandomNumber() {
    const minNumber = document.createElement('input');
    minNumber.placeholder = 'din min. nummer';
    minNumber.setAttribute('id', 'minValue');
    minNumber.type = 'number'
    minNumber.style.display = 'block'
    minNumber.style.padding = '5px 0'

    const maxNumber = document.createElement('input');
    maxNumber.placeholder = 'din max. nummer';
    maxNumber.setAttribute('id', 'maxValue');
    maxNumber.type = 'number'
    maxNumber.style = 'display: block; padding: 5px 0;';

    const numberOutput = document.createElement('p');
    numberOutput.setAttribute('id', 'resultNumber')

    const buttonClick = document.createElement('button');
    buttonClick.innerText='click';
    buttonClick.addEventListener('click', randomNumber);

    L2_4.appendChild(minNumber);
    L2_4.appendChild(maxNumber);
    L2_4.appendChild(numberOutput);
    L2_4.appendChild(buttonClick);

    function randomNumber() {
        const minValue = parseInt(document.getElementById('minValue').value);
        const maxValue = parseInt(document.getElementById('maxValue').value);

        if (isNaN(minValue) || isNaN(maxValue)) {
            document.getElementById('resultNumber').innerText = 'Please enter valid numbers.';
            return;
        }

        let min = Math.min(minValue, maxValue);
        let max = Math.max(minValue, maxValue);
        let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

        document.getElementById('resultNumber').innerText =
            `Vores tilfældige tal mellem ${min} og ${max} er:
    ${randomValue}`;
    }

}
getRandomNumber()
//5. Lav en funktion der returnerer en tilfældig RGB farve værdi og tildel denne til et element du opretter, når brugeren klikker på en knap.
