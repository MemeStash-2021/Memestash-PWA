"use strict";
import {get, lfConig} from "./config/config.js";


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
                <p><em class="fas fa-eye"></em>22K</p>
                <p><em class="fas fa-heart"></em>10K</p>
            </figcaption>`
        }
    )
}

function storeCards(data) {
    localforage.config(lfConig)
    localforage.setItem("cards", data)
}
