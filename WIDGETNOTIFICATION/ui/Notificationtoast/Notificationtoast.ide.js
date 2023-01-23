TW.IDE.Widgets.Notificationtoast = function () {
    // this.widgetIconUrl = function () {
    //     return "http://localhost:8015/Thingworx/Common/thingworx/widgets/mashup/mashup.ide.png";
    // };

    this.widgetProperties = function () {
        var properties = {
            name: "Notificationtoast",
            description: "Notificationtoast Chart",
            category: ["Common"],
            isExtension: true,
            supportsAutoResize: true,
            properties: {
                NotificationId: {
                    baseType: "STRING",
                    // isBindingTarget: true,
                },

                PopUpBrowser : {
                    baseType: "BOOLEAN",
                    isBindingTarget: true,
                    defaultValue: false,
                },
                PopUpOS : {
                    baseType: "BOOLEAN",
                    isBindingTarget: true,
                    defaultValue: false,

                },

                notifURL : {
                    baseType: "STRING",
                    isBindingSource: true,
                    // isBindingTarget: true,
                },

                notifIcon  : {
                    baseType: "STRING",
                    isBindingSource: true,
                    // isBindingTarget: true,
                },

                notifTitle   : {
                    baseType: "STRING",
                    isBindingSource: true,
                    // isBindingTarget: true,
                },

                notifMessage    : {
                    baseType: "STRING",
                    isBindingSource: true,
                    // isBindingTarget: true,
                },
                notifStatus     : {
                    baseType: "STRING",
                    isBindingSource: true,
                    // isBindingTarget: true,
                },

                isSoundActive  : {
                    baseType: "BOOLEAN",
                    isBindingTarget: true,
                    defaultValue: false,
                },

                soundURL  : {
                    baseType: "STRING",
                    // isBindingSource: true,
                    isBindingTarget: true,
                    defaultValue:"http://localhost:8015/Thingworx/FileRepositories/SystemRepository/notification_sound.mp3"
                },
                urlServiceWorker : {
                    baseType: "STRING",
                    // isBindingSource: true,
                    isBindingTarget: true,
                    defaultValue: "http://localhost:8015/Thingworx/FileRepositories/SystemRepository/firebase-messaging-sw.js",
                },

                topicFirebase : {
                    baseType: "STRING",
                    // isBindingSource: true,

                    defaultValue: "topic_34",
                },
           
            },
        };

        return properties;
    };

    // The function is called before any property is updated in the ThingWorx Composer. You can perform validations on the new property value before it is committed. If the validation fails, you can return a message string to inform the user about the invalid input. The new property value is not be committed. If nothing is returned during the validation, then the value is assumed valid.
    this.beforeSetProperty = function (name, value) {};

    this.afterSetProperty = function (name, value) {
        this.updatedProperties();
        return true;
    };

    this.afterLoad = function () {};

    this.renderHtml = function () {
        return '<div class="widget-content widget-Notificationtoast"></div>';
    };

    this.afterRender = function () {
        // console.log("widht screen detector after click", window.innerWidth)
        // console.log("heiht screen detector after click", window.innerHeight)
        // this.setProperty("ScreenWidth",  window.innerWidth);
        // this.setProperty("ScreenHeight", window.innerHeight);
        // try {
        //     var allWidgetProps = this.properties;

        //     var widgetProps = {};

        //     for (const [key, value] of Object.entries(allWidgetProps)) {
        //         if (key.includes("Style")) {
        //             widgetProps[key] = TW.getStyleFromStyleDefinition(
        //                 this.getProperty(key)
        //             );
        //         } else {
        //             widgetProps[key] = this.getProperty(key);
        //         }
        //     }

        //     console.log("widgetProps running ScreenDetectorv2 after click");
        //     console.log(widgetProps);
        // } catch (error) {
        //     console.log("error");
        //     console.log(error);
        // }

        this.setupWidget();
    };

    this.setupWidget = function () {
        var widgetID = this.jqElementId;

        d3.select(`#${widgetID}`).selectAll("*").remove();
        // Handle Properties
        try {
            var allWidgetProps = this.allWidgetProperties().properties;

            var widgetProps = {};

            for (const [key, value] of Object.entries(allWidgetProps)) {
                if (key.includes("Style")) {
                    widgetProps[key] = TW.getStyleFromStyleDefinition(
                        this.getProperty(key)
                    );
                } else {
                    widgetProps[key] = this.getProperty(key);
                }
            }

            console.log("widgetProps idle widget-Notificationtoast");
            console.log(widgetProps);
        } catch (error) {
            console.log("error");
            console.log(error);
        }

        // input

        d3.select(`#${widgetID}`).append("div").attr("class","circleofnotification").text("!")


     
    };

    // this.widgetServices = function () {
    //     return {
    //         clickedEventFilter: {
    //             description: "clickedEventFilter",
    //         },

    //     };

    // };

    this.widgetEvents = function () {
        return {
       
            notificationfTrigger: {
                description: "Event triggered when notif active",
            },
        };
    };
};
