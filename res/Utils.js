const fs = require("fs");
const jf = require("jsonfile");

const tokenDiscord = (jf.readFileSync("config.json")).tokenDiscord;
const tokenTwitch = (jf.readFileSync("config.json")).tokenTwitch;
const meID = (jf.readFileSync("config.json")).meID;
const alertsID = (jf.readFileSync("config.json")).alertsID;
const twitterFeedID = (jf.readFileSync("config.json").twitterFeedID);

module.exports.constants = {
    "meID":meID,
    "alertsID":alertsID,
    "twitterFeedID":twitterFeedID,
    "tokenDiscord":tokenDiscord,
    "tokenTwitch":tokenTwitch
}

module.exports.opts = {
    identity: {
        username: "Adjutant0",
        password: tokenTwitch
    },
    channels: [
        "BaHeTo0"
    ]
};