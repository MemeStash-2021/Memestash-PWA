export const apiURL = "http://localhost:8888"
export const lfConig = {
    name: "Memestash",
    version: 1.0,
    description: 'Contains content of a Memestash user'
}

export async function get(uri) {
    return fetch(`${apiURL}${uri}`, {
        method: "GET"
    }).then((response) => {
            return response.json()
        }
    )
}