const utils = require("../res/Utils.js");

let bot;

module.exports.init = function(b){
    bot=b;
}

module.exports.onReady = function(){
    console.log("Adjutant0 ONLINE!");
}

module.exports.onMessage = function(msg){
    if(msg.content === "ping"){
        msg.reply("pong");
    }else if(msg.content === "chin"){
        msg.reply("chong")
    }
}

module.exports.onPresenceUpdate = function(oldMember, newMember){
    if(newMember.id === utils.constants.meID){
        if((newMember.presence.game.streaming) && (!oldMember.presence.game.streaming)){
            bot.channels.get(utils.constants.alertsID).send("@everyone BaHeTo0 just went live on https://twitch.tv/baheto0");
        }
    }
}