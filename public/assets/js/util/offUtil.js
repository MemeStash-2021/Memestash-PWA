"use strict";

document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    if (!navigator.onLine) {
        blockNonCachedPages()
        displayWaring()
    }
}

function blockNonCachedPages() {
    document.querySelector('header nav').innerHTML = `<a href="index.html" class="nav-item"><em class="fas fa-user-alt"></em>Home</a>
                                                        <a href="collection.html" class="nav-item"><em class="fas fa-box-open"></em>Cards</a>`;
}

function displayWaring() {
    document.querySelector('.offline').innerHTML = `<p class="error-code">Offline Edition</p>`
}
