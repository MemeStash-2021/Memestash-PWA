async function get(uri) {
    return fetch(`${apiURL}${uri}`, {
        method: "GET"
    }).then((response) => {
        return response.json()
    })
}
