const utils = require("./Utils.js");

const INTERVAL_TIME_IN_MINUTES = 5;
const AT_LEAST_MESSEGES_COUNT = 5;
const announcements = [
    "Join this weirdo's discord: https://discord.gg/WyUZANb",
    "Follow that guy on twitter: https://twitter.com/baheto0"
];

let botDiscord;
let botTwitch;

let messages = 0;

module.exports.init = function(d, t){
    botDiscord = d;
    botTwitch = t;
}

module.exports.message = function(){
    ++messages;
}

setInterval(function(){

    if(messages>=AT_LEAST_MESSEGES_COUNT){
        messages=0;
        announce();
    }

}, INTERVAL_TIME_IN_MINUTES*60000);

let announce = function(){
    botTwitch.say(utils.opts.channels[0],announcements[Math.floor(Math.random*2)]);
}