function constructCard(data) {
    return `<figure class="card" data-id="${data.id}">
        <img src="${(data.image === undefined) ? data.picture : data.image}" alt="${data.name} image" data-id="${data.id}">
            <figcaption data-id="${data.id}">
                <p data-id="${data.id}"><em class="fas fa-eye" data-id="${data.id}"></em>${formatNumbers(data.views)}</p>
                <p data-id="${data.id}"><em class="fas fa-heart" data-id="${data.id}"></em>${formatNumbers(data.likes)}</p>
            </figcaption>`
}
