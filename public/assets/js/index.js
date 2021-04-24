"use strict";
import { get } from "./config/config.js";
import { constructCard } from "./util/wrappers.js";
import { redirectCard } from "./util/clickable.js";


document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    fetchProfile().then(result => {
        displayProfile(result)
    })
}

async function fetchProfile() {
    const userId = (localStorage.getItem("userId") === null) ? 1 : localStorage.getItem("userId")
    return get(`/users/${userId}`).then(data => { return data })
}

function displayProfile(profile) {
    document.querySelector("#nameplate em").innerHTML = profile.name
    document.querySelector("#balance").innerHTML = `<em class="fas fa-coins"></em>${profile.wallet}`
    profile.cards.forEach(card => {
        document.querySelector("main article div").innerHTML += constructCard(card)
    });
    document.querySelectorAll(".card").forEach(card => card.addEventListener("click", redirectCard))
}
