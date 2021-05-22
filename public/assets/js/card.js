"use strict";
document.addEventListener("DOMContentLoaded", scriptLoader);
const userId = localStorage.getItem("userId")
let cardId

function scriptLoader() {
    document.querySelector(".popup").style.display = "none"
    document.querySelector(".error").style.display = "none"
    displayCard()
}

function displayCard() {
    cardId = localStorage.getItem('cardId')
    get(`/cards?id=${cardId}`)
        .then(card => {
            document.querySelector("main").innerHTML += constructCard(card[0])
            document.querySelector("main").innerHTML += `
        <h2>${card[0].name}</h2>
        <p>${card[0].description}</p>`
            document.querySelector("footer").innerHTML += `
        <a href="index.html"><em class="fas fa-arrow-left"></em></a>
        <p><em class="fas fa-coins"></em>${card[0].price} Buy</p>`
            document.querySelector("footer p").addEventListener("click", buyCard)
        })
}

function buyCard() {
    put(`/users/${userId}/cards/${cardId}`)
        .then(response => {
            let newCard = response.cards.pop()
            document.querySelector(".popup").style.display = "block"
            document.querySelector(".popup").innerHTML = `
        <h2> Card bought!</h2>
        <p> A "${newCard.name}" has been bought and added to your inventory</p>`
            setTimeout(() => document.querySelector(".popup").style.display = "none", 5000)
        })
        .catch(err => {
            document.querySelector(".error").style.display = "block"
            document.querySelector(".error").innerHTML = `
        <h2>Something went wrong!</h2>
        <p>${err.message}</p>`
        })
}
