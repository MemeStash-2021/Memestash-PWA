async function get(uri) {
    return fetch(`${apiURL}${uri}`, {
        method: "GET"
    }).then((response) => {
        return response.json()
    })
}

async function put(uri, body = null) {
    return fetch(`${apiURL}${uri}`, {
        method: "PUT",
        body: (body == null) ? null : body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
