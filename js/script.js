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




