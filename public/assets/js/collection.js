import {get} from "./config/config.js";
"use strict";

document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    fetchCards()
}

function fetchCards() {
    const userId = (localStorage.getItem("userId") === null) ? 1 : localStorage.getItem("userId")
    get(`/users/${userId}/cards`).then((result) => {
        console.log(result)
    })
}

function displayCards(cards) {
    //TODO: display cards
}