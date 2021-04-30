"use strict";

document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    if (!navigator.onLine) {
        localforage.config(lfConig)
        localforage.getItem('cards').then((cards) => {
            displayCards(cards)
            storeCards(cards)
        })
    } else {
        fetchCards().then((result) => {
            displayCards(result)
            storeCards(result)
        })
    }
}

async function fetchCards() {
    const userId = (localStorage.getItem("userId") === null) ? 1 : localStorage.getItem("userId")
    return get(`/users/${userId}/cards`).then((result) => {
        return result
    })
}

function displayCards(data) {
    data.cards.forEach(card => {
        document.querySelector("main").innerHTML += constructCard(card)
    })
    document.querySelectorAll(".card").forEach(card => card.addEventListener("click", redirectCard))
}

function storeCards(data) {
    localforage.config(lfConig)
    localforage.setItem("cards", data)
}
