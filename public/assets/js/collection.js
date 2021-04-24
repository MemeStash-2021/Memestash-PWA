"use strict";
import { get, lfConig } from "./config/config.js";

document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    if (!navigator.onLine) {
        let cards = localStorage.getItem('cards')
        displayCards(cards)
        storeCards(cards)
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
        document.querySelector("main").innerHTML +=
            `<figure class="card">
            <img src="${card.image}" alt="${card.name} image">
            <figcaption>
                <p><em class="fas fa-eye"></em>${formatNumbers(card.views)}</p>
                <p><em class="fas fa-heart"></em>${formatNumbers(card.likes)}</p>
            </figcaption>`
    }
    )
}

function storeCards(data) {
    localforage.config(lfConig)
    localforage.setItem("cards", data)
}

function formatNumbers(number) {
    let val = ('' + number).length
    if (3 < val && val <= 6) {
        return `${Math.floor(number / 1000)}K`;
    }
    if (6 < val && val <= 9) {
        return `${Math.floor(number / 10000)}M`;
    }
    return number.toString()
}
