export let apiURL = "http://localhost:8888"

export async function get(uri) {
    await fetch(`${apiURL}${uri}`, {
        method: "GET",
        mode: "no-cors"
    }).then((response) => {
            return response.json()
        }
    )

}