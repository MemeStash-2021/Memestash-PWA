if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('../../../sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}


navigator.serviceWorker.ready.then(() =>
    document.querySelector(".fa-bell").addEventListener("click", requestNotifications)
)

function requestNotifications() {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("Granted")
        } else if (permission == "denied") {
            console.log("Denied")
        } else if (permission == "default") {
            console.log("default")
        }
    })
}
