let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");

// Opgave 1
function fullName(firstName, lastName) {
  let greeting = "Welcome " + firstName + " " + lastName;
  let newH3 = document.createElement("h3");
  newH3.innerText = greeting;
  L1_1.appendChild(newH3);
}
fullName()

// Opgave 2
// Function Calls
function hideThis() {
  let hideButton = document.createElement('button');
  hideButton.innerText = 'Hide';

  let hideText = document.createElement('h3');
  hideText.innerText = 'Please hide this message!';

  hideButton.addEventListener('click', () => {
    hideText.classList.toggle('hidden');
    if (hideButton.innerText === 'Hide') {
      hideButton.innerText = 'Show';
      console.log('message is hidden');
    } else {
      hideButton.innerText = 'Hide';
      console.log('message is shown');
    }
  });
  L1_2.appendChild(hideButton)
  L1_2.appendChild(hideText)
};


hideThis()

// opgave 3
//3. Lav en funktion der farver et element når man klikker på en knap og viser en besked til brugeren om at farven er ændret. Når man trykker på knappen igen skal farven fjernes.
function colorThis() {
  let colorButton = document.createElement('button');
  colorButton.innerText = 'Color it red!';

  let colorMessage = document.createElement('p');
  colorMessage.innerText = '';

  colorButton.addEventListener('click', () =>{
  L1_3.style.background = 'red';
  colorMessage.innerText = 'Color has been changed!';
  
  if(colorButton.innerText === 'Color it red!'){
    colorButton.innerText = 'Remove red!';
    L1_3.style.background = 'none';
    colorMessage.innerText = 'Color has been removed!';
  } else{
    colorButton.innerText = 'Color it red!';
    L1_3.style.background = 'red';
    colorMessage.innerText = 'Color has been changed!';
  }
  })
  L1_3.appendChild(colorButton);
  L1_3.appendChild(colorMessage);
}

colorThis();

//opgave 4
//4. Lav en funktion der tæller hvor mange gange brugeren har klikket på en knap og vis antallet af klik, som det opdateres, i DOM´en.


//opgave 5
//5. Lav en funktion der kan tage imod et ord som argument. Funktionen skal kunne tælle hvor langt ordet er, vise ordet i DOM´en og fortælle brugeren hvor langt ordet er.
