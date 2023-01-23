// import { connect } from "./mqtt/mqtt.js";

d3.select("body").append("div").attr("class", "circleofnotification").append("img").attr("class","img_class_div").attr("src","./notif.png");

var popUpBrowser  = true 
var popUpOS  = true
var isSoundActive  = true 
var soundURL = "http://127.0.0.1:5500/PJ-Portek-ID/notification-html/notification_sound.mp3"


const isPushNotificationSupported = () => {
    return "serviceWorker" in navigator && "PushManager" in window;
};



const askUserPermission = async () => {
    return await Notification.requestPermission();
};

const sendNotification = (title, options, url) => {
    navigator.serviceWorker.ready
        .then(() => {
            new Notification(title, options).onclick = (event) => {
                window.open(url, "Taicang Application");
            };
        }
        )
        .catch(
            (e) => {}
            // //console.log(e.toString())
        );
};

const playSound =() => {
    const a = new Audio(soundURL);
    return a.play();
}

const registerServiceWorker = () => {
    return navigator.serviceWorker.register(`http://127.0.0.1:5500/PJ-Portek-ID/notification-html/sw.js`);

    // navigator.serviceWorker
    // .register(
    //     `http://127.0.0.1:5500/PJ-Portek-ID/notification-html/firebase-messaging-sw.js`
    // )
    // .then((registration) => {
    //     console.log("registration")

    //     console.log(registration)
};

console.log("Notification.permission")

const notifyUser = (title,url,icon,message,status) => {
    let options = {
        body: status + " with message: "+message,
        action: [{ action: "open_url", title: "View" }],
        icon: icon,
        silent: true
    };
    if (!isPushNotificationSupported) {
        alert("This browser does not support push notification");
    } else if (Notification.permission === "granted") {
        registerServiceWorker();
        sendNotification(title, options,url);
    } else if (Notification.permission !== "denied") {
        askUserPermission();
    }
};

const url_mqtt = "ws://192.168.7.121:1220";
const options_mqtt = {
    username: "indie_nodelinx",
    password: "indie123",
    clean: true,
    qos: 0,
    keepalive: 120,
    rejectUnauthorized: false,
};

const client_mqtt = mqtt.connect(url_mqtt, options_mqtt);

client_mqtt.on("close", () => {
    console.log("disconnected mqtt");
});

client_mqtt.on("error", (error) => {
    console.log("Can't connect" + error);
});

client_mqtt.on("connect", function () {
    console.log("mqtt Connected");
    client_mqtt.subscribe("MTCCC");
});

// client_mqtt.on("message", function (topic, message) {
//     // message is Buffer
//     try {
//         const response = message.toString();
//         console.log("mqtt notification");
//         console.log(JSON.parse(response));

//         var backgroundcolor = '#fff'

//         if (JSON.parse(response).status == "success"){
//             backgroundcolor = "#59BA56"
//         } else if (JSON.parse(response).status == "warning"){
//             backgroundcolor = "#FFB71B"
//         }else if (JSON.parse(response).status == "critical"){
//             backgroundcolor = "#FA604B"
//         }else if (JSON.parse(response).status == "info"){
//             backgroundcolor = "#38B4DF"
//         }
        
//         if (popUpBrowser){
//             Toastify({
//                 text: JSON.parse(response).status + " with message: "+ JSON.parse(response).message,
//                 duration: 2000,
//                 // destination: "https://github.com/apvarun/toastify-js",
//                 // newWindow: true,
//                 close: true,
//                 gravity: "top", // `top` or `bottom`
//                 position: "center", // `left`, `center` or `right`
//                 stopOnFocus: true, // Prevents dismissing of toast on hover
//                 style: {
//                     background: backgroundcolor,
//                     color : "#000"
//                 },
//                 onClick: function () {

//                     window.open(JSON.parse(response).url, '_blank').focus();
//                 }, // Callback after click
//             }).showToast();
//         }

//         if (popUpOS){
            
//             notifyUser(JSON.parse(response).title , JSON.parse(response).url , JSON.parse(response).icon, JSON.parse(response).message , JSON.parse(response).status )
            
//         }
        
//         if (isSoundActive){
//             playSound();
//         }
        
        
        

//         // var divbox =  document.getElementById("id-div-toastify")

//         // console.log(divbox)
//         // console.log(divbox.style)

//         // if (divbox.style.display !== "none") {
//         //     divbox.style.display = "none";
//         // } else {
//         //     divbox.style.display = "flex";
//         // }
//     } catch (e) {
//         console.log(e.message);
//     }
// });




// const socketIO = io("https://192.168.7.121:4001");

// socketIO.on('connection', (socket) => {
//     console.log('a user connected');
//   });

// socketIO.on("connect", () => {
//     console.log("Client Connect");
// });

// socketIO.on("disconnect", () => {
//     console.log("Client Disconnect");
// });

// socketIO.on("DCIM_NOTIFICATION", (data) => {
//     console.log(JSON.parse(data).text);
//     Toastify({
//         text: JSON.parse(data).text,
//         duration: 3000,
//         // destination: "https://github.com/apvarun/toastify-js",
//         // newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//         onClick: function(){} // Callback after click
//       }).showToast();
//    notifyUser(JSON.parse(data).text)
// });

// var loc = window.location.pathname;
// var dir = loc.substring(0, loc.lastIndexOf('/'));

// console.log("dir")
// console.log(dir)

// const ua = navigator.userAgent;
// console.log(ua.indexOf("Chrome"));
// console.log(ua.indexOf("Firefox"));
// http://127.0.0.1:5500/PJ-Portek-ID/notification-html/firebase-messaging-sw.js

navigator.serviceWorker
.register(
    `http://127.0.0.1:5500/PJ-Portek-ID/notification-html/firebase-messaging-sw.js`
)
.then((registration) => {
    console.log("registration")

    console.log(registration)
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBQ4YPnixyJmT8wdAU4ycTfF88GSij69bM",
        authDomain: "test-notification-app-e1507.firebaseapp.com",
        projectId: "test-notification-app-e1507",
        storageBucket: "test-notification-app-e1507.appspot.com",
        messagingSenderId: "1007562721667",
        appId: "1:1007562721667:web:7982841128dc6dbf35ceb6",
    };
    firebase.initializeApp(config);
    const messaging = firebase.messaging();
    messaging.useServiceWorker(registration);

    messaging
        .requestPermission()
        .then(function () {
            console.log("Notification permission granted.");
            // $("#subscribe").text("Unactive");
        })
        .catch(function (err) {
            console.log("Unable to get permission to notify.", err);
            // $("#subscribe").text("Active");
        });

    function run() {
        messaging
            .requestPermission()
            .then(function () {
                console.log("Notification permission granted.");
                // $("#subscribe").text("Unactive");
            })
            .catch(function (err) {
                console.log(
                    "Unable to get permission to notify.",
                    err
                );
                // $("#subscribe").text("Active");
            });
    }

    // Get Instance ID token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging
        .getToken()
        .then(function (currentToken) {
            if (currentToken) {
                console.log("currentToken");
                console.log(currentToken);
                subscribeTokenToTopic(currentToken, "topic_35");
                // $("#tokenarea").html(currentToken);
            } else {
                // Show permission request.
                console.log(
                    "No Instance ID token available. Request permission to generate one."
                );
                // Show permission UI.
                updateUIForPushPermissionRequired();
            }
        })
        .catch(function (err) {
            console.log(
                "An error occurred while retrieving token. ",
                err
            );
        });
    messaging.onTokenRefresh(function () {
        messaging
            .getToken()
            .then(function (refreshedToken) {
                console.log("Token refreshed.");
                // $("#tokenarea").html(refreshedToken);
                // Indicate that the new Instance ID token has not yet been sent to the
                // app server.
                console.log(refreshedToken);
                // ...
            })
            .catch(function (err) {
                console.log(
                    "Unable to retrieve refreshed token ",
                    err
                );
            });
    });

    messaging.onMessage(function (payload) {
        console.log( "payload");

        console.log((payload));
      
        var backgroundcolor = '#fff'

        if (payload.data.status == "success"){
            backgroundcolor = "#59BA56"
        } else if (payload.data.status == "warning"){
            backgroundcolor = "#FFB71B"
        }else if (payload.data.status == "critical"){
            backgroundcolor = "#FA604B"
        }else if (payload.data.status == "info"){
            backgroundcolor = "#38B4DF"
        }
        
        if (popUpBrowser){
            Toastify({
                text: payload.data.status + " with message: "+ payload.data.message,
                duration: 2000,
                // destination: "https://github.com/apvarun/toastify-js",
                // newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: backgroundcolor,
                    color : "#000"
                },
                onClick: function () {

                    window.open(payload.data.url, '_blank').focus();
                }, // Callback after click
            }).showToast();
        }

        if (popUpOS){
            
            notifyUser(payload.data.title , payload.data.url , payload.data.icon, payload.data.message , payload.data.status );
   
        }
        
        if (isSoundActive){
            playSound();
        }
        


        // Toastify({
        //     text: payload.data.message,
        //     duration: 3000,
        //     // destination: "https://github.com/apvarun/toastify-js",
        //     // newWindow: true,
        //     close: true,
        //     gravity: "top", // `top` or `bottom`
        //     position: "center", // `left`, `center` or `right`
        //     stopOnFocus: true, // Prevents dismissing of toast on hover
        //     style: {
        //         background:
        //             "linear-gradient(to right, #00b09b, #96c93d)",
        //     },
        //     onClick: function () {}, // Callback after click
        // }).showToast();



        // notifyUser(payload.data.message)
        // ...
    });


    const subscribeTokenToTopic = (token, topic) => {
        const fcm_server_key =
            "AAAA6pdrCYM:APA91bEkBu689IkG6omG5sGCShzuQXarU5GUhMuYr5Sd1TMpHX3dIrN97mQNsXtuhbE3kLetTRIAOfLS6NyaFwDUT0ntW1a6I2x-PYRqDhuK11a1qpTUrYohlOckPqepHuii-GVZf6SI";
        fetch(
            "https://iid.googleapis.com/iid/v1/" +
                token +
                "/rel/topics/" +
                topic,
            {
                method: "POST",
                headers: new Headers({
                    Authorization: "key=" + fcm_server_key,
                }),
            }
        )
            .then((response) => {
                if (
                    response.status < 200 ||
                    response.status >= 400
                ) {
                    throw (
                        "Error subscribing to topic: " +
                        response.status +
                        " - " +
                        response.text()
                    );
                }
                console.log('Subscribed to "' + topic + '"');
            })
            .catch((error) => {
                console.error(error);
            });
    };
})
.catch(function (err) {
    console.log("Service worker registration failed, error:", err);
});
