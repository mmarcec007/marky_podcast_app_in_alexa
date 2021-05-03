
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
                                    "touchForward": false,
                                    "id": "plantList"
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
                                            "type": "Video",
                                            "height": "100%",
                                            "width": "70vw",
                                            "alignSelf": "center",
                                            "shrink": 1,
                                            "autoplay": true,
                                            "audioTrack": "foreground",
                                            "id": "videoPlayerId",
                                            "source": [
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1891086403585/netpicks_May21_1_649731_5130.mp4",
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1890933315654/Unpacked_April_649720_5130.mp4",
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/28/1890910787933/GalaxyBookOdyssey_649718_5130.mp4",
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890478147712/TechToday_280421_SB_649706_5130.mp4",
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890245187959/Carfection_CupraFormentor_Final_HD__649692_5130.mp4",
                                                "https://cnetvideo.cbsistatic.com/vr/2021/04/27/1890046531998/TT_04_27_2021_649685_5130.mp4"
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
                                    "id": "plantDetail",
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