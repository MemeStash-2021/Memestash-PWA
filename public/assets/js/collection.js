"use strict";
import {get, lfConig} from "./config/config.js";
import { constructCard } from "./util/wrappers.js"

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
            document.querySelector("main").innerHTML += constructCard(card)
        }
    )
}

function storeCards(data) {
    localforage.config(lfConig)
    localforage.setItem("cards", data)
}
