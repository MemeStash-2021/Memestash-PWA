import { formatNumbers } from "./formatter.js"

export function constructCard(data) {
    return `<figure class="card">
        <img src="${data.image}" alt="${data.name} image">
            <figcaption>
                <p><em class="fas fa-eye"></em>${formatNumbers(data.views)}</p>
                <p><em class="fas fa-heart"></em>${formatNumbers(data.likes)}</p>
            </figcaption>`
}
