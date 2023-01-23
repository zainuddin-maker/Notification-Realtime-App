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


This application is used to receive data, then notifications directly with the choice of firebase connection, socket io or mqtt.

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


English
aplikasi ini akan langsung menampilkan notifikasi jika data terkirim sesuai dengan data connect . notifikasi nya terdiri dari 2 bentuk , yaitu notifikasi di page contoh nya seperti dibawah ini :
This application will immediately display a notification if the data sent matches the data connect. The notification consists of 2 forms, namely the notification on the page, for example as below:

![Chat Preview](https://github.com/zainuddin-maker/Maintanance-Calendar/blob/master/hovervassel.PNG?raw=true)

we can set the location of the ship based on id and position data

For maintenance data, it is used to display the maintenance schedule and also its status, status based on the input legend provided, and its color based on the status matched to the legend. and on the maintenance label you can input an image. in the maintenance section you can click and output the maintenance data. and also in this section you can hover and display data maintenance information

![Chat Preview](https://github.com/zainuddin-maker/Maintanance-Calendar/blob/master/hovermain.PNG?raw=true)

And also if the data is on today then the calendar header will change color to gray, and there is an hour pointer for the current situation.

![Chat Preview](https://github.com/zainuddin-maker/Maintanance-Calendar/blob/master/Today.PNG?raw=true)


</td>
</tr>
</table>

<!-- ## BIND DATA

1.  JSONDocinformation , input - JSON - Data for Doc Information in header


        {
            name: (STRING),
            value: (STRING),
        }



2.  JSONHeaderinformation, input - JSON - Data for Headerinformation in header.


        {
            name: (STRING),
            value: (STRING),
        }

3.  ConfigurationWidth, input - INFOTABLE - Configuration widht each of column in excel.


        {
            width: (STRING),
        }


4.  BooleanDisplayButton , input -BOOLEAN - Input for button seen or not
5.  Filename , input - STRING - name of file after exported
6.  Headername , input - STRING - the title in template document.
4.  LabourProductivity , input - INFOTABLE - Data for Labour Productuvity

        {
            name: (STRING),
            value: (STRING),
            unit:  (STRING),
         }

5.  DataAddChangeMaintanance , input - INFOTABLE - List of Change of Maintanance .

        datashape :
        {
            changefrom : (DATE),
            idmaintanance : (NUMBER),
        }

6.  DataClickMaintanance , output - INFOABLE - Data out after click maintanance .

        datashape :
        {
            form : (DATE) ,
            to : (DATE),
            id : (STRING),
            idmaintanance : (NUMBER),
            imgstatus : (STRING),
            status : (STRING),
            text : (STRING),
        }

7.  idRandom , input - STRING - Random ID for Application
8.  HeightOfHeader , input - NUMBER - change height of header tittle

## BIND TRIGGER

1. clickMaintanance, out - "Event triggered when clicked the maintanance"
1. updateMaintanance, in - "Event triggered when maintanance updated"


 -->

## Built with

-   [D3.js](https://d3js.org/) - D3.js is a JavaScript library for manipulating documents based on data.
-   [html](https://www.w3schools.com/html/) - HTML is the standard markup language for Web pages.
-   [css](https://www.w3schools.com/css/) - CSS is the language we use to style an HTML document
