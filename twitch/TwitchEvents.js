const utils = require("../res/Utils.js");

let client;

module.exports.init = function(b){
    client=b;
}

module.exports.onConnectedHandler = function(address, port){
    console.log(`* Connected to ${address}:${port}`);
}

module.exports.onMessageHandler = function(target, context, message, self){
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = message.trim();

    // If the command is known, let's execute it
    if (commandName === '!dice') {
    const num = Math.floor(Math.random() * 6) + 1;
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
    } else {
    console.log(`* Unknown command ${commandName}`);
    }
}