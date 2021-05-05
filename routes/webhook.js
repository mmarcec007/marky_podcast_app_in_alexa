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
        } else if (intentName === 'OpenForm') {
            response = alexaResponse.getAplForm();
        } else if (intentName === 'GoBack') {
            const tokenName = context["Alexa.Presentation.APL"].token.split(";")[0];
            if (tokenName === 'detailsToken' || tokenName === 'someForm') {
                response =  alexaResponse.getGoBackAplCommand(context["Alexa.Presentation.APL"].token, 'episodesList');
            }
        } else if (intentName === 'PlayLast') {
            const tokenName = context["Alexa.Presentation.APL"].token.split(";")[0];
            if (tokenName === 'videoPlayerToken') {
                response =  alexaResponse.getUpdateSourceAndMediaControlAplCommand(
                    context["Alexa.Presentation.APL"].token,
                    'videoPlayerId'
                );
            }
        } else if (intentName === 'Play' ||intentName === 'AMAZON.ResumeIntent') {
            const tokenName = context["Alexa.Presentation.APL"].token.split(";")[0];
            if (tokenName === 'videoPlayerToken') {
                response =  alexaResponse.getMediaControlAplCommand(context["Alexa.Presentation.APL"].token,
                    'videoPlayerId',
                    'play'
                );
            }
        } else if (intentName === 'AMAZON.PauseIntent') {
            const tokenName = context["Alexa.Presentation.APL"].token.split(";")[0];
            if (tokenName === 'videoPlayerToken') {
                response =  alexaResponse.getMediaControlAplCommand(context["Alexa.Presentation.APL"].token,
                    'videoPlayerId',
                    'pause'
                );
            }
        } else if (intentName === 'AMAZON.NextIntent') {
            const tokenName = context["Alexa.Presentation.APL"].token.split(";")[0];
            if (tokenName === 'videoPlayerToken') {
                response =  alexaResponse.getMediaControlAplCommand(context["Alexa.Presentation.APL"].token,
                    'videoPlayerId',
                    'next'
                );
            }
        } else if (intentName === 'AMAZON.PreviousIntent') {
            const tokenName = context["Alexa.Presentation.APL"].token.split(";")[0];
            if (tokenName === 'videoPlayerToken' ) {
                response =  alexaResponse.getMediaControlAplCommand(context["Alexa.Presentation.APL"].token,
                    'videoPlayerId',
                    'previous'
                );
            }
        } else if (intentName === 'AMAZON.StartOverIntent') {
            const tokenName = context["Alexa.Presentation.APL"].token.split(";")[0];
            if (tokenName === 'videoPlayerToken') {
                response =  alexaResponse.getMediaControlAplCommand(context["Alexa.Presentation.APL"].token,
                    'videoPlayerId',
                    'rewind'
                );
            }
        }
    } else if (requestType === 'Alexa.Presentation.APL.UserEvent') {
        const arguments = request.arguments;
        console.log("Printing argument: " + JSON.stringify(arguments[0], null, 4));
        const argumentType = arguments[0].type !== undefined ? arguments[0].type : null;
        const url = arguments[0].url !== undefined ? arguments[0].url : null;
        if (argumentType === 'details') {
            response = alexaResponse.getAplCardResponse('Details about ' + arguments[0].title, arguments[0]);
        } else if (argumentType === 'video') {
            response = alexaResponse.getVideoResponse(url, '', '');
        } else if (argumentType === 'submitForm') {
            const age = arguments[0].age !== undefined ? arguments[0].age : null;
            const consent = arguments[0].consent !== undefined ? arguments[0].consent : null;
            response = alexaResponse.getSetValueAplCommand(context["Alexa.Presentation.APL"].token, {age: age, consent: consent});
        } else if (argumentType === 'videoInfo') {
            // classic alexa speech response
            response = alexaResponse.getTextResponse('Going to play next video.');
        } else if (argumentType === 'videosFinishedPlaying') {
            // classic alexa speech response
            response = alexaResponse.getTextResponse('What would you like to do next?');
        } else if (arguments[0] === 'goBack') {
            const tokenName = context["Alexa.Presentation.APL"].token.split(";")[0];
            if (tokenName === 'detailsToken' || tokenName === 'someForm') {
                response =  alexaResponse.getGoBackAplCommand(context["Alexa.Presentation.APL"].token, 'episodesList');
            }
        }
    }
    console.log(JSON.stringify(response, null, 4));
    res.send(response);
});

module.exports = router;
