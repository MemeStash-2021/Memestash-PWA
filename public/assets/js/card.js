"use strict";
document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    displayCard()
}

function displayCard() {
    let cardId = localStorage.getItem('cardId')
    get(`/cards?id=${cardId}`).then(card => {
        document.querySelector("main").innerHTML += constructCard(card[0])
        document.querySelector("main").innerHTML += `
        <h2>${card[0].name}</h2>
        <p>${card[0].description}</p>`
        document.querySelector("footer").innerHTML += `
        <a href="index.html"><em class="fas fa-arrow-left"></em></a>
        <p><em class="fas fa-coins"></em>${card[0].price} Buy</p>`
    })
}
