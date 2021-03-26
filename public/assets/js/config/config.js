export let apiURL = "http://localhost:8888"

export async function get(uri) {
    return await fetch(`${apiURL}${uri}`, {
        method: "GET"
    }).then((response) => {
            return response.json()
        }
    )
}