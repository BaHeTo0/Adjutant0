const utils = require("../res/Utils.js");

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

    // Remove whitespace from chat message
    const commandName = message.trim();

    // If the command is known, let's execute it
    if (commandName === '!dice') {
        rollDice(target);
    }
}

let rollDice = function(target){
    const num = Math.floor(Math.random() * 6) + 1;
    botTwitch.say(target, `You rolled a ${num}`);
}