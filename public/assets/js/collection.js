"use strict";
import {get} from "./config/config.js";


document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    fetchCards().then((result) => displayCards(result))
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

async function fetchCards() {
    const userId = (localStorage.getItem("userId") === null) ? 1 : localStorage.getItem("userId")
    return get(`/users/${userId}/cards`).then((result) => {
        return result
    })
}