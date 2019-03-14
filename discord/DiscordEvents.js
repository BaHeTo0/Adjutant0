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
    console.log("presence update fired");
    if(newMember.id === utils.constants.meID){
        console.log("member is BaHeTo0");
        if((newMember.presence.status === "dnd") && (oldMember.presence.status !== "dnd")){
            console.log("went into dnd")
            bot.channels.get(utils.constants.alertsID).send("BaHeTo0 is pissed!");
        }
    }
}