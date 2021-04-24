"use strict";
import { get} from "./config/config.js";


document.addEventListener("DOMContentLoaded", scriptLoader);

function scriptLoader() {
    fetchProfile()
}

async function fetchProfile() {
    const userId = (localStorage.getItem("userId") === null) ? 1 : localStorage.getItem("userId")
    return get(`/users/${userId}`).then(result => console.log(result))
}
