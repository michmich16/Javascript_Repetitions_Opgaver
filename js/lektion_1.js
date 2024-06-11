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
function toggleHide() {
  let element = document.getElementById("L1_2");
  if (element.classList.toggle("hidden")) {
    console.log("element is hidden");
  }};



// opgave 3
//3. Lav en funktion der farver et element når man klikker på en knap og viser en besked til brugeren om at farven er ændret. Når man trykker på knappen igen skal farven fjernes.
function farverElement() {
  let element = document.getElementById("L1_3");
  element.style.background ='#fe0000';
  element.innerHTML += "color is changed";
  console.log("color has changed");
}

//opgave 4
// Lav en funktion der tæller hvor mange gange brugeren har klikket på en knap og vis antallet af klik, som det opdateres, i DOM´en.
function clickCounter() {
let count = 0;
let btn = document.getElementById("clickButton");
let element = document.getElementById("L1_4");
 
btn.addEventListener("click", () => {
    count++;
    element.innerHTML += `button has been click ${count} times`;


})};
clickCounter()

//opgave 5
// 5. Lav en funktion der kan tage imod et ord som argument. Funktionen skal kunne tælle hvor langt ordet er, vise ordet i DOM´en og fortælle brugeren hvor langt ordet er.
function countWord() {
  let count = 0;
  
}