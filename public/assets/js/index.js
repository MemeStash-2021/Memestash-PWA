"use strict";

document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    if (!navigator.onLine) {
        localforage.config(lfConig)
        localforage.getItem('profile').then((profile) => {
            displayProfile(profile)
        })
    }
    else {
        fetchProfile()
            .then(result => {
                storeProfile(result)
                displayProfile(result)
            })
    }
    document.querySelector(".popup").style.display = "none"
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

function storeProfile(data) {
    localforage.config(lfConig)
    localforage.setItem("profile", data)
}
