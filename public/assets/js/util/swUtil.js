const userId = (localStorage.getItem("userId") == null) ? 1 : localStorage.getItem("userId")

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
            registerPush()
        } else {
            console.log("Push notification's disabled")
        }
    })

    function registerPush() {
        get("/push/public").then(keys => {
            let key = keys.publicKey
            let subOptions = {
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(key)
            }
            navigator.serviceWorker.ready.then(reg => {
                return reg.pushManager.subscribe(subOptions);
            }).then(sub => {
                post(`/push/${userId}`, JSON.stringify(sub))
                    .then(response => {
                        document.querySelector(".popup").style.display = "block"
                        document.querySelector(".popup").innerHTML = `<p>Notifications are enabled!</p>`
                        setTimeout(() => document.querySelector(".popup").style.display = "none")
                    })
                    .catch(err => console.error("Unable to active the notifications."))
            })
        }
        )
    }

    function urlBase64ToUint8Array(base64String) {
        let padding = '='.repeat((4 - base64String.length % 4) % 4);
        let base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        let rawData = window.atob(base64);
        let outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
}
