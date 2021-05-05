
module.exports.getTextResponse = function (text) {
    return {
        "version": "1.0",
        "response": {
            "outputSpeech": {
                "type": "PlainText",
                "text": text
            },
            "shouldEndSession": false
        }
    }
}

module.exports.getSimpleCardResponse = function (text) {
    return {
        "version": "1.0",
        "response": {
            "outputSpeech": {
                "type": "PlainText",
                "text": text
            },
            "card": {
                "type": "Simple",
                "title": 'Marky Video Show',
                "content": text
            },
            "shouldEndSession": false
        }
    }
}

module.exports.getVideoResponse = function (videoUrl, videoTitle, videoSubtitle) {
    const encodedUrl = encodeURI(videoUrl);
    return {
        "version": "1.0",
        "sessionAttributes": null,
        "response": {
            "outputSpeech": {
                "type": "PlainText",
                "text": 'Playing ' + videoTitle
            },
            "directives": [
                {
                    "type": "VideoApp.Launch",
                    "videoItem": {
                        "source": encodedUrl,
                        "metadata": {
                            "title": videoTitle,
                            "subtitle": videoSubtitle
                        }
                    }
                }
            ]
        }
    }
}

module.exports.getAplListResponse = function (text) {
    return {
        "version": "1.0",
        "response": {
            "outputSpeech": {
                "type": "PlainText",
                "text": text
            },
            "directives": [
                {
                    "type": "Alexa.Presentation.APL.RenderDocument",
                    "token": "episodesListToken",
                    "document": {
                        "type": "APL",
                        "version": "1.6",
                        "extensions": [
                            {
                                "name": "Back",
                                "uri": "aplext:backstack:10"
                            }
                        ],
                        "settings": {
                            "Back": {
                                "backstackId": "episodesList"
                            }
                        },
                        "theme": "dark",
                        "import": [
                            {
                                "name": "alexa-layouts",
                                "version": "1.3.0"
                            }
                        ],
                        "mainTemplate": {
                            "parameters": [
                                "payload"
                            ],
                            "items": [
                                {
                                    "type": "AlexaImageList",
                                    "headerTitle": "${payload.textListData.title}",
                                    "headerBackButton": false,
                                    "headerAttributionImage": "${payload.textListData.logoUrl}",
                                    "backgroundImageSource": "${payload.textListData.backgroundImage.sources[0].url}",
                                    "listItems": "${payload.textListData.listItems}",
                                    "touchForward": true,
                                    "id": "videoList"
                                }
                            ]
                        }
                    },
                    "datasources": {
                        "textListData": {
                            "type": "object",
                            "objectId": "textListSample",
                            "backgroundImage": {
                                "contentDescription": null,
                                "smallSourceUrl": null,
                                "largeSourceUrl": null,
                                "sources": [
                                    {
                                        "url": "https://www.cnet.com/a/img/RAUXAZx571IYN23S1Q39i4oCaJw=/940x0/2017/08/01/89e33dde-c9d3-4769-95f3-f9f46454b175/all-video-new-1400.jpg",
                                        "size": "large"
                                    }
                                ]
                            },
                            "title": "Available CNET Podcasts",
                            "listItems": [
                                {
                                    "primaryText": "What's new to stream for May 2021",
                                    "imageSource": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                    "primaryAction": [
                                        {
                                            "type": "SendEvent",
                                            "arguments": [
                                                {
                                                    "type": "details",
                                                    "title": "What's new to stream for May 2021",
                                                    "imageUrl": "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1891086403585/netpicks_May21_1_649731_5130.mp4",
                                                    "videoUrl": "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1891086403585/netpicks_May21_1_649731_5130.mp4"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "primaryText": "Every Galaxy Book revealed at the Samsung Unpacked event",
                                    "imageSource": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                    "primaryAction": [
                                        {
                                            "type": "SendEvent",
                                            "arguments": [
                                                {
                                                    "type": "details",
                                                    "title": "Every Galaxy Book revealed at the Samsung Unpacked event",
                                                    "imageUrl": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                                    "videoUrl": "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1890933315654/Unpacked_April_649720_5130.mp4"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "primaryText": "Samsung unveils Galaxy Book and Galaxy Book Odyssey",
                                    "imageSource": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                    "primaryAction": [
                                        {
                                            "type": "SendEvent",
                                            "arguments": [
                                                {
                                                    "type": "details",
                                                    "title": "Samsung unveils Galaxy Book and Galaxy Book Odyssey",
                                                    "imageUrl": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                                    "videoUrl": "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1890910787933/GalaxyBookOdyssey_649718_5130.mp4"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "primaryText": "CDC loosens mask restrictions, Spotify launches podcast subscriptions",
                                    "imageSource": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                    "primaryAction": [
                                        {
                                            "type": "SendEvent",
                                            "arguments": [
                                                {
                                                    "type": "details",
                                                    "title": "CDC loosens mask restrictions, Spotify launches podcast subscriptions",
                                                    "imageUrl": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                                    "videoUrl": "https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890478147712/TechToday_280421_SB_649706_5130.mp4"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "primaryText": "The Cupra Fomentor sets a high bar for the new brand",
                                    "imageSource": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                    "primaryAction": [
                                        {
                                            "type": "SendEvent",
                                            "arguments": [
                                                {
                                                    "type": "details",
                                                    "title": "The Cupra Fomentor sets a high bar for the new brand",
                                                    "imageUrl": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                                    "videoUrl": "https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890245187959/Carfection_CupraFormentor_Final_HD__649692_5130.mp4"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "primaryText": "Apple's iOS 14.5 brings privacy changes, Spotify increases prices",
                                    "imageSource": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                    "primaryAction": [
                                        {
                                            "type": "SendEvent",
                                            "arguments": [
                                                {
                                                    "type": "details",
                                                    "title": "Apple's iOS 14.5 brings privacy changes, Spotify increases prices",
                                                    "imageUrl": "https://pbcdn1.podbean.com/imglogo/dir-logo/212361/212361_300x300.jpg",
                                                    "videoUrl": "https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890046531998/TT_04_27_2021_649685_5130.mp4"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
                        }
                    },
                    "sources": {}
                }
            ],
            "shouldEndSession": false
        }
    }
}

module.exports.getAplVideoPlayer = function () {
    return {
        "version": "1.0",
        "response": {
            "directives": [
                {
                    "type": "Alexa.Presentation.APL.RenderDocument",
                    "token": "videoPlayerToken",
                    "document": {
                        "type": "APL",
                        "version": "1.6",
                        "license": "Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.\nSPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0\nLicensed under the Amazon Software License  http://aws.amazon.com/asl/",
                        "import": [
                            {
                                "name": "alexa-layouts",
                                "version": "1.3.0"
                            }
                        ],
                        "mainTemplate": {
                            "parameters": [
                                "payload"
                            ],
                            "items": [
                                {
                                    "type": "Container",
                                    "height": "100vh",
                                    "width": "100vw",
                                    "paddingTop": "@spacingSmall",
                                    "bind": [
                                        {
                                            "name": "sliderThumbPosition",
                                            "value": 0
                                        },
                                        {
                                            "name": "videoProgressValue",
                                            "type": "number",
                                            "value": 0
                                        },
                                        {
                                            "name": "videoTotalValue",
                                            "type": "number",
                                            "value": 0
                                        }
                                    ],
                                    "items": [
                                        {
                                            "type": "AlexaBackground"
                                        },
                                        {
                                            "type": "Text",
                                            "id": "catFactText",
                                            "text": "Not all cats like catnip.",
                                            "speech": "<speak>Not all cats like <emphasis level='strong'>catnip</emphasis>.</speak>"
                                        },
                                        {
                                            "type": "Video",
                                            "height": "100%",
                                            "width": "70vw",
                                            "alignSelf": "center",
                                            "shrink": 1,
                                            "autoplay": true,
                                            "audioTrack": "foreground",
                                            "id": "videoPlayerId",
                                            "source": [
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1891086403585/netpicks_May21_1_649731_5130.mp4"/*,
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1890933315654/Unpacked_April_649720_5130.mp4",
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1890910787933/GalaxyBookOdyssey_649718_5130.mp4",
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890478147712/TechToday_280421_SB_649706_5130.mp4",
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890245187959/Carfection_CupraFormentor_Final_HD__649692_5130.mp4",
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890046531998/TT_04_27_2021_649685_5130.mp4"*/
                                            ],
                                            "onPlay": [
                                                {
                                                    "type": "SetValue",
                                                    "property": "videoTotalValue",
                                                    "value": "${event.duration}"
                                                }
                                            ],
                                            "onTrackUpdate": [
                                                {
                                                    "type": "SetValue",
                                                    "property": "videoTotalValue",
                                                    "value": "${event.duration}"
                                                },
                                                {
                                                    "type": "SendEvent",
                                                    "arguments": [
                                                        {
                                                            "type": "videoInfo",
                                                            "duration": "${event.duration}"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "onTimeUpdate": [
                                                {
                                                    "type": "SetValue",
                                                    "property": "videoProgressValue",
                                                    "value": "${event.currentTime}"
                                                },
                                                {
                                                    "type": "SetValue",
                                                    "componentId": "slider",
                                                    "property": "progressValue",
                                                    "value": "${videoProgressValue}"
                                                },
                                                {
                                                    "type": "SetValue",
                                                    "property": "videoTotalValue",
                                                    "value": "${event.duration}"
                                                }
                                            ],
                                            "onEnd": [
                                                {
                                                    "type": "SendEvent",
                                                    "arguments": [
                                                        {
                                                            "type": "videosFinishedPlaying",
                                                            "duration": "${event.duration}"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "Container",
                                            "alignItems": "center",
                                            "item": [
                                                {
                                                    "type": "AlexaSlider",
                                                    "id": "slider",
                                                    "progressValue": "${videoProgressValue}",
                                                    "totalValue": "${videoTotalValue}",
                                                    "positionPropertyName": "sliderThumbPosition",
                                                    "metadataDisplayed": true,
                                                    "metadataPosition": "above_right",
                                                    "width": "75vw",
                                                    "paddingBottom": "90dp",
                                                    "onUpCommand": [
                                                        {
                                                            "type": "SetValue",
                                                            "componentId": "debugText",
                                                            "property": "text",
                                                            "value": "${sliderThumbPosition - videoProgressValue}"
                                                        },
                                                        {
                                                            "type": "ControlMedia",
                                                            "componentId": "videoPlayerId",
                                                            "command": "seek",
                                                            "value": "${sliderThumbPosition - videoProgressValue}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "AlexaTransportControls",
                                                    "mediaComponentId": "videoPlayerId",
                                                    "playPauseToggleButtonId": "playPauseToggleButtonId",
                                                    "primaryControlSize": "70dp",
                                                    "secondaryControlSize": "60dp",
                                                    "autoplay": true,
                                                    "position": "absolute",
                                                    "bottom": "10dp"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        }
    };
}

module.exports.getAplCardResponse = function (text, videoDetails) {
    return {
        "version": "1.0",
        "response": {
            "outputSpeech": {
                "type": "PlainText",
                "text": text
            },
            "directives": [
                {
                    "type": "Alexa.Presentation.APL.RenderDocument",
                    "token": "detailsToken" + ";" + videoDetails.videoUrl,
                    "document": {
                        "type": "APL",
                        "version": "1.6",
                        "extensions": [
                            {
                                "name": "Back",
                                "uri": "aplext:backstack:10"
                            }
                        ],
                        "import": [
                            {
                                "name": "alexa-layouts",
                                "version": "1.3.0"
                            }
                        ],
                        "mainTemplate": {
                            "parameters": [
                                "payload"
                            ],
                            "items": [
                                {
                                    "type": "AlexaDetail",
                                    "id": "videoDetails",
                                    "detailType": "location",
                                    "detailImageAlignment": "right",
                                    "headerTitle": "${payload.detailImageRightData.title}",
                                    "headerSubtitle": "${payload.detailImageRightData.subtitle}",
                                    "headerBackButton": true,
                                    "headerAttributionImage": "${payload.detailImageRightData.logoUrl}",
                                    "imageBlurredBackground": false,
                                    "imageScale": "best-fill",
                                    "imageAspectRatio": "square",
                                    "imageAlignment": "right",
                                    "imageSource": "${payload.detailImageRightData.image.sources[0].url}",
                                    "imageCaption": "${payload.detailImageRightData.image.contentDescription}",
                                    "primaryText": "${payload.detailImageRightData.textContent.primaryText.text}",
                                    "secondaryText": "${payload.detailImageRightData.textContent.secondaryText.text}",
                                    "button1Text": "${payload.detailImageRightData.buttons[0].text}",
                                    "button1Theme": "dark",
                                    "button1PrimaryAction": "${payload.detailImageRightData.buttons[0].action}",
                                    "backgroundImageSource": "${payload.detailImageRightData.backgroundImage.sources[0].url}",
                                    "theme": "dark"
                                }
                            ]
                        }
                    },
                    "datasources": {
                        "detailImageRightData": {
                            "type": "object",
                            "objectId": "detailImageRightSample",
                            "backgroundImage": {
                                "contentDescription": null,
                                "smallSourceUrl": null,
                                "largeSourceUrl": null,
                                "sources": [
                                    {
                                        "url": "https://www.cnet.com/a/img/RAUXAZx571IYN23S1Q39i4oCaJw=/940x0/2017/08/01/89e33dde-c9d3-4769-95f3-f9f46454b175/all-video-new-1400.jpg",
                                        "size": "large"
                                    }
                                ]
                            },
                            "title": "Plant Stores",
                            "subtitle": "Seattle",
                            "image": {
                                "contentDescription": "",
                                "smallSourceUrl": null,
                                "largeSourceUrl": null,
                                "sources": [
                                    {
                                        "url": videoDetails.imageUrl,
                                        "size": "large"
                                    }
                                ]
                            },
                            "textContent": {
                                "primaryText": {
                                    "type": "PlainText",
                                    "text": videoDetails.title
                                },
                                "secondaryText": {
                                    "type": "PlainText",
                                    "text": "TBD"
                                }
                            },
                            "buttons": [
                                {
                                    "text": "Play Video Podcast",
                                    "action": [
                                        {
                                            "type": "SendEvent",
                                            "arguments": [{"type": "video", "url": videoDetails.videoUrl}]
                                        }
                                    ]
                                }
                            ],
                            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
                        }
                    },
                    "sources": {}
                }
            ],
            "shouldEndSession": false
        }
    }
}

module.exports.getAplForm = function () {
    return {
        "version": "1.0",
        "response": {
            "directives": [
                {
                    "type": "Alexa.Presentation.APL.RenderDocument",
                    "token": "someForm",
                    "document": {
                        "type": "APL",
                        "version": "1.4",
                        "extensions": [
                            {
                                "name": "Back",
                                "uri": "aplext:backstack:10"
                            }
                        ],
                        "background": "#1f2227",
                        "settings": {},
                        "theme": "dark",
                        "import": [
                            {
                                "name": "alexa-styles",
                                "version": "1.1.0"
                            },
                            {
                                "name": "alexa-layouts",
                                "version": "1.2.0"
                            }
                        ],
                        "resources": [],
                        "styles": {
                            "EditStyle": {
                                "values": [
                                    {
                                        "borderWidth": 10,
                                        "borderStrokeWidth": 10,
                                        "borderColor": "darkgrey",
                                        "hintColor": "#00b0e6",
                                        "hintWeight": "600",
                                        "color": "#00b0e6",
                                        "fontSize": "70dp",
                                        "size": 50
                                    }
                                ]
                            }
                        },
                        "onMount": [],
                        "graphics": {},
                        "commands": {},
                        "layouts": {},
                        "mainTemplate": {
                            "parameters": [
                                "payload"
                            ],
                            "items": [
                                {
                                    "type": "Container",
                                    "height": "100%",
                                    "width": "100%",
                                    "paddingTop": "40vh",
                                    "alignItems": "center",
                                    "bind": [
                                        {
                                            "name": "TextToSubmit",
                                            "value": "0",
                                            "type": "number"
                                        },
                                        {
                                            "name": "ConsentToSubmit",
                                            "value": false,
                                            "type": "boolean"
                                        }
                                    ],
                                    "items": [
                                        {
                                            "type": "EditText",
                                            "id": "box",
                                            "width": "39vw",
                                            "height": "15vh",
                                            "style": "EditStyle",
                                            "onTextChange": [
                                                {
                                                    "type": "SetValue",
                                                    "when": "${String.length(event.source.text) == 1 }",
                                                    "componentId": "resultId",
                                                    "property": "text",
                                                    "value": "you are too young to see this move"
                                                },
                                                {
                                                    "type": "SetValue",
                                                    "when": "${String.length(event.source.text) == 2 && event.source.text < '18'}",
                                                    "componentId": "resultId",
                                                    "property": "text",
                                                    "value": "you are too young to see this move"
                                                },
                                                {
                                                    "type": "SetValue",
                                                    "when": "${String.length(event.source.text) == 2 && event.source.text >= '18'}",
                                                    "componentId": "resultId",
                                                    "property": "text",
                                                    "value": "you are old enough to see this movie"
                                                },
                                                {
                                                    "type": "SetValue",
                                                    "componentId": "box",
                                                    "property": "borderColor",
                                                    "value": "red"
                                                },
                                                {
                                                    "type": "SetValue",
                                                    "when": "${String.length(event.source.text) == 2 && event.source.text >= '18'}",
                                                    "componentId": "box",
                                                    "property": "borderColor",
                                                    "value": "green"
                                                },
                                                {
                                                    "type": "SetValue",
                                                    "when": "${String.length(event.source.text) == 2 && event.source.text >= '18'}",
                                                    "property": "TextToSubmit",
                                                    "value": "${event.source.text}"
                                                }
                                            ],
                                            "maxLength": 2,
                                            "hint": "Enter your age",
                                            "validCharacters": "-0-9"
                                        },
                                        {
                                            "type": "Text",
                                            "id": "someTextId",
                                            "text": "Some Text",
                                            "textAlignVertical": "left",
                                            "width": "75%"
                                        },
                                        {
                                            "type": "AlexaRadioButton",
                                            "id": "${radioButtonId}",
                                            "radioButtonHeight": "${radioButtonHeight}",
                                            "radioButtonWidth": "${radioButtonWidth}",
                                            "radioButtonColor": "${radioButtonColor}",
                                            "checked": "${checked}",
                                            "disabled": "${disabled}",
                                            "primaryAction": [
                                                {
                                                    "type": "SetValue",
                                                    "componentId": "someTextId",
                                                    "property": "text",
                                                    "value": "${event.source.checked}"
                                                },
                                                {
                                                    "type": "SetValue",
                                                    "property": "ConsentToSubmit",
                                                    "value": "${event.source.checked}"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "Text",
                                            "id": "resultId",
                                            "paddingTop": "5vh",
                                            "text": "Enter your age to check if you may see this movie ..."
                                        },
                                        {
                                            "type": "AlexaButton",
                                            "buttonText": "Submit",
                                            "id": "idForThisButton",
                                            "primaryAction": {
                                                "type": "SendEvent",
                                                "arguments": [
                                                    {
                                                        "type": "submitForm",
                                                        "age": "${TextToSubmit}",
                                                        "consent": "${ConsentToSubmit}"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "datasources": {},
                    "sources": {}
                }
            ]
        }
    };
}

module.exports.getGoBackAplCommand = function (token, backValue) {
    return {
        "version": "1.0",
        "response": {
            "directives": [
                {
                    "type": "Alexa.Presentation.APL.ExecuteCommands",
                    "token": token,
                    "commands": [
                        {
                            "type": "Back:GoBack",
                            "backType": "id",
                            "backValue": backValue
                        }
                    ]
                }
            ]
        }
    }
}

module.exports.getSetValueAplCommand = function (token, value) {
    const age = value.age;
    const consent = value.consent;
    return {
        "version": "1.0",
        "response": {
            "directives": [
                {
                    "type": "Alexa.Presentation.APL.ExecuteCommands",
                    "token": token,
                    "commands": [
                        {
                            "type": "SetValue",
                            "componentId": "someTextId",
                            "property": "text",
                            "value": `Entered values age ${age} and consent ${consent}`
                        }
                    ]
                }
            ]
        }
    }
}

module.exports.getSpeakItemAplCommand = function (token) {
    return {
        "version": "1.0",
        "response": {
            "directives": [
                {
                    "type": "Alexa.Presentation.APL.ExecuteCommands",
                    "token": token,
                    "commands": [
                        {
                            "type": "SpeakItem",
                            "componentId": "catFactText",
                            "highlightMode": "line",
                            "align": "center"
                        }
                    ]
                }
            ]
        }
    }
}

// APL media commands

module.exports.getMediaControlAplCommand = function (token, componentId, mediaControlCommand) {
    return {
        "version": "1.0",
        "response": {
            "directives": [
                {
                    "type": "Alexa.Presentation.APL.ExecuteCommands",
                    "token": token,
                    "commands": [
                        {
                            "type": "ControlMedia",
                            "componentId": componentId,
                            "command": mediaControlCommand
                        }
                    ]
                }
            ]
        }
    }
}


module.exports.getUpdateSourceAndMediaControlAplCommand = function (token, componentId, mediaControlCommand = 'play') {
    return {
        "version": "1.0",
        "response": {
            "directives": [
                {
                    "type": "Alexa.Presentation.APL.ExecuteCommands",
                    "token": token,
                    "commands": [
                        {
                            "type": "SetValue",
                            "componentId": componentId,
                            "property": 'source',
                            "value": 'https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890046531998/TT_04_27_2021_649685_5130.mp4'
                        },
                        {
                            "type": "ControlMedia",
                            "componentId": componentId,
                            "command": mediaControlCommand
                        }
                    ]
                }
            ]
        }
    }
}
