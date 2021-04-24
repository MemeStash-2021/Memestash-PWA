"use strict";
import {get, lfConig} from "./config/config.js";
import {formatNumbers} from "./util/formatter.js"

document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    fetchCards().then((result) => {
        displayCards(result)
        storeCards(result)
    })
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
