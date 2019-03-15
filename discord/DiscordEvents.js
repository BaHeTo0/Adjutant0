const utils = require("../res/Utils.js");

let botDiscord;
let botTwitch;

module.exports.init = function(d, t){
    botDiscord = d;
    botTwitch = t;
}

module.exports.onReady = function(){
    console.log("Adjutant0 online on discord!");
}

module.exports.onMessage = function(msg){
    pingPong(msg);
}

module.exports.onPresenceUpdate = function(oldMember, newMember){
    if(startedStreaming(oldMember, newMember)){
        announceStream(botDiscord);
    }
}

let startedStreaming = function(oldMember, newMember) {
    if(newMember.id = utils.constants.meID && newMember.presence.game !== null) {//user is me & game is not null
        if(newMember.presence.game.streaming) {//game is streaming
            if(oldMember.presence.game !== null){//previous game is not null
                if(!oldMember.presence.game.streaming){//previous game is not streming
                    return true;
                }
            }
            return true;
        }
    }
    return false;
}
let announceStream = function(botDiscord){
    botDiscord.channels.get(utils.constants.alertsID).send("@everyone BaHeTo0 just went live on https://twitch.tv/baheto0");
}
let pingPong = function(msg) {
    if(msg.content === "ping"){
        msg.reply("pong");
    }else if(msg.content === "chin"){
        msg.reply("chong")
    }
}