async function get(uri) {
    return new Promise((resolve, reject) => {
        fetch(`${apiURL}${uri}`, {
            method: "GET"
        }).then((response) => {
            if (!response.ok) {
                reject(HTTPError(response))
            }
            resolve(response.json())
        })
    })
}

async function put(uri, body = null) {
    return new Promise(((resolve, reject) => {
        fetch(`${apiURL}${uri}`, {
            method: "PUT",
            body: (body == null) ? null : body,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (!response.ok) {
                reject(HTTPError(response))
            }
            resolve(response.json())
        })
    }))
}

function HTTPError(response) {
    let error
    switch (response.status){
        case 403: error = new Error("You don't have enough coins"); break;
        case 404: error = new Error("We couldn't find the requested entity"); break;
        case 409: error = new Error("The username is already taken"); break;
        default: error = new Error("Internal server error"); break;
    }
    error.response = response
    error.status = response.status
    return error
}
