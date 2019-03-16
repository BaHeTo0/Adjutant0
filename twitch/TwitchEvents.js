const utils = require("../res/Utils.js");
const timers = require("../res/Timers.js");

let botDiscord;
let botTwitch;

module.exports.init = function(d,t){
    botDiscord = d;
    botTwitch = t;
}

module.exports.onConnectedHandler = function(address, port){
    console.log("Adjutant connect to twitch!");
}

module.exports.onMessageHandler = function(target, context, message, self){
    if (self) return;// Ignore messages from the bot
    timers.message();//Update the message count in timers.js

    // Remove whitespace from chat message
    const commandName = message.trim();

    // If the command is known, let's execute it
    if (commandName === '!dice') {
        rollDice(target);
    } else if(commandName === "!discord"){
        announceDiscord(target);
    } else if(commandName === "!twitter"){
        announceTwitter(target);
    }
}

let rollDice = function(target){
    const num = Math.floor(Math.random() * 6) + 1;
    botTwitch.say(target, `You rolled a ${num}`);
}

let announceDiscord = function(target){
    botTwitch.say(target, "Join this weirdo's discord: https://discord.gg/WyUZANb");
}

let announceTwitter = function(target){
    botTwitch.say(target, "Follow that guy on twitter: https://twitter.com/baheto0");
}