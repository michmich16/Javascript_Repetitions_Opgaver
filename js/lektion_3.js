let L3_1 = document.querySelector("#L3_1");
let L3_2 = document.querySelector("#L3_2");
let L3_3 = document.querySelector("#L3_3");
let L3_4 = document.querySelector("#L3_4");
let L3_5 = document.querySelector("#L3_5");


const classArray = ['Makka', 'Elena', 'Mathias', 'Peter', 'Christian'];
//1. Lav et objekt der indeholder; klassens hold nr, lokale, et array med alle deltagere og en metode til at tilføje en ny elev til klassen.
function displayClassNames() {
    for (let i = 0; i < classArray.length; i++) {
        let newElement = document.createElement('p');
        newElement.innerText = classArray[i];
        L3_1.appendChild.newElement;
    }
}

displayClassNames()


//2. Når objektet er lavet skal du lave en knap der kan tilføje en ny elev ved navn Jonas når brugeren trykker på knappen. Der skal også komme en besked til brugeren om at en ny elev ved navn Jonas er tilføjet. Hvis navnet Jonas allerede findes i arrayet skal der komme en besked der siger: "Denne elev findes allerede".

//3. Lav en funktion der kan vise alle værdier fra objektet i DOM´en når funktionen køres. Det vil sige; hold nummer, klasse værelse og alle elevernes navne.

//4. Lav et array med 10 forskllige tal og lav så en funktion der kan plusse alle disse tal sammen til et samlet resultat. Resultatet skal vises i DOM´en.
