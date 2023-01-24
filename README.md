<h1 align="center"  style="font-weight:bold;" >
  <br>
  <!-- <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.png" alt="Markdownify" width="200"></a> -->
  <br>
  Notification Realtime
  <br>
</h1>

> Data input from thingworx application .

<!-- <h4 align="center">A minimal Markdown Editor desktop app built on top of <a target="_blank">Electron</a>.</h4> -->

![Chat Preview](https://github.com/zainuddin-maker/Notification-Realtime-App/blob/master/App.PNG?raw=true)

<!-- ![screenshot](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/Convert_excel_to_JSON.mp4?raw=true) -->


This application is used to receive data, then notifications directly with the choice of firebase connection, socket io or mqtt with custom sound .

## Example Data

-   Mqtt Data Connect 

        {
            url_mqtt : "http://192.168.0.121",
            topic : "topic",
            username: "username",
            password: "password",
            clean: true,
            qos: 0,
            keepalive: 120,
            rejectUnauthorized: false,
        };

-  Firebase Data Connect

        {
            apiKey:"apiKey",
            authDomain:"authDomain.com",
            projectId: "projectId",
            storageBucket: "storageBucket.com",
            messagingSenderId: "1007562721667",
            appId: "7982841128dc6dbf35ceb6",
            topic : "topic_36",
            fcm_server_key : "fcm_server_key"
        }

- Socket Io Data Connect

        {
            url_socketio : "http://192.168.0.121",
            topic : "topic",
            rejectUnauthorized: false,
        };


## Usage example

<table>
<tr>
<td>


This application will immediately display a notification if the data sent matches the data connect. The notification consists of 2 forms, namely the notification on the page, for example as below:

![Chat Preview](https://github.com/zainuddin-maker/Notification-Realtime-App/blob/master/PoupupinPage.PNG?raw=true)

And also notifications on the device, will appear in the lower right corner of the screen, for example as below:

![Chat Preview](https://github.com/zainuddin-maker/Notification-Realtime-App/blob/master/PoupupinOS.PNG?raw=true)




</td>
</tr>
</table>


## Built with

-   [D3.js](https://d3js.org/) - D3.js is a JavaScript library for manipulating documents based on data.
-   [mqtt.js](https://www.npmjs.com/package/mqtt) - MQTT.js is a client library for the MQTT protocol, written in JavaScript for node.js and the browser.
-   [firebase-app.js](https://www.npmjs.com/package/@firebase/app) - This package coordinates the communication between the different Firebase components.
-   [firebase-messaging.js](https://www.npmjs.com/package/@firebase/messaging) - This is the Firebase Cloud Messaging component of the Firebase JS SDK.
-   [socket.io.min.js](https://cdnjs.com/libraries/socket.io) - socket.io node.js realtime framework server.
-   [toastify.js](https://apvarun.github.io/toastify-js/) - Better notification messages.
-   [toastify.min.css](https://github.com/apvarun/toastify-js/blob/master/README.md) - Toastify is a lightweight, vanilla JS toast notification library.
-   [html](https://www.w3schools.com/html/) - HTML is the standard markup language for Web pages.
-   [css](https://www.w3schools.com/css/) - CSS is the language we use to style an HTML document
