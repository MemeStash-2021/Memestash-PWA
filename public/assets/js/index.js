"use strict";
import { get } from "./config/config.js";
import { formatNumbers } from "./util/formatter.js"


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
        document.querySelector("main article div").innerHTML +=
            `<figure class="card">
            <img src="${card.image}" alt="${card.name} image">
            <figcaption>
                <p><em class="fas fa-eye"></em>${formatNumbers(card.views)}</p>
                <p><em class="fas fa-heart"></em>${formatNumbers(card.likes)}</p>
            </figcaption>`
    });
    
}
