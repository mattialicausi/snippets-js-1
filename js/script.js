'use strict';

/*
Maggiore e minore
Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore.
*/

//prendo elementi dal dom
const containerNumbers = document.getElementById('container-numbers');
const results = document.getElementById('results');
const btnSubmit = document.getElementById('btn-submit');
const userInput = document.getElementById('userInput');
const lista = [];


function showValore() {
    if(userInput.value) {
        console.log(userInput.value);
        containerNumbers.innerHTML = "";

        if(lista.length < 4) {
            lista.push(userInput.value);
            console.log(lista);

            lista.forEach((el) => {
                const newLi = document.createElement('li');
                newLi.innerHTML = el;
                containerNumbers.appendChild(newLi);
            });
        } else if (lista.lenght = 4) {
            const min = lista => lista.reduce((x, y) => Math.min(x, y));
            const numMin = document.createElement('div').innerHTML = 'Numero minimo: ' + min(lista);
            results.append(numMin);

            const max = lista => lista.reduce((x, y) => Math.max(x, y));
            const numMax = document.createElement('div').innerHTML = 'Numero massimo: ' + max(lista);
            results.append(numMax);
        
        };
        
    }
}

btnSubmit.addEventListener('click', showValore);





/*
Quanti anni ha?
Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

l’età della persona

quanti anni sono necessari per raggiungere i 100
*/

const dateOfBirth = document.getElementById('dateOfBirth');
const currentDate = document.getElementById('currentDate');
const btnDate = document.getElementById('btn-submit-date');

// data attuale
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();
//const currentDate = currentDay + ':' + currentMonth + ':' + currentYear;

function takeDate() {
    const currentMilli = new Date(currentDate.value).getTime();
    const dobMilli = new Date(dateOfBirth.value).getTime();
    const years = currentMilli - dobMilli;

   if (currentMilli > dobMilli) {
       const differenza = currentMilli - dobMilli;
       console.log(differenza / (1000 * 60 * 60 * 24));
   }
};

btnDate.addEventListener('click', takeDate);






