var express = require('express');
var router = express.Router();
const alexaResponse = require('../alexa/response/alexaResponse');

/* GET test request. */
router.get('/', function(req, res, next) {
    res.send('ceca');
});

router.post('/', function(req, res, next) {
    const {request, context} = req.body;
    const requestType = request.type;
    const intentName = request.intent !== undefined ? request.intent.name : null;
    let response = alexaResponse.getTextResponse("Sorry, I can't help");
    console.log(JSON.stringify(req.body, null, 4));
    if (requestType === 'LaunchRequest') {
        response =  alexaResponse.getAplListResponse('Hi and welcome to Marky Video Show. To play a video just say, "play a video".')
    } else if (requestType === 'IntentRequest') {
        if (intentName === 'PlayVideo') {
            response =  alexaResponse.getVideoResponse('https://cnetvideo.cbsistatic.com/vr/2021/04/28/1891086403585/netpicks_May21_1_649731_5130.mp4', 'May CNET Intro', "What's new to stream for May 2021");
            if (context) {
                const tokenName = context["Alexa.Presentation.APL"].token.split(";")[0];
                const tokenValue = context["Alexa.Presentation.APL"].token.split(";")[1];
                if (tokenName === 'detailsToken') {
                    console.log("Logging Alexa.Presentation.APL ", JSON.stringify(context["Alexa.Presentation.APL"], null, 4));
                    response =  alexaResponse.getVideoResponse(tokenValue, 'May CNET Intro', "What's new to stream for May 2021");
                }
            }
        } else if (intentName === 'OpenVideoPlayer') {
            response = alexaResponse.getAplVideoPlayer();
        }
    } else if (requestType === 'Alexa.Presentation.APL.UserEvent') {
        const arguments = request.arguments;
        console.log("Printing argumentF: " + arguments[0]);
        const argumentType = arguments[0].type !== undefined ? arguments[0].type : null;
        const url = arguments[0].url !== undefined ? arguments[0].url : null;
        if (argumentType === 'details') {
            response = alexaResponse.getAplCardResponse('Details about ' + arguments[0].title, arguments[0]);
        } else if (argumentType === 'video') {
            response = alexaResponse.getVideoResponse(url, '', '');
        } else if (arguments[0] === 'goBack') {
            response =  alexaResponse.getAplListResponse('')
        }
    }
    console.log(JSON.stringify(response, null, 4));
    res.send(response);
});

module.exports = router;
