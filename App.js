const discord = require("discord.js");
const tmi = require("tmi.js");
const utils = require("./res/Utils.js");
const twitchEvents = require("./twitch/TwitchEvents.js");
const discordEvents = require("./discord/DiscordEvents.js");

//creating clients
const botDiscord = new discord.Client();
const botTwitch = tmi.client(utils.opts);

//passing the clients to the event handlers
discordEvents.init(botDiscord);
twitchEvents.init(botTwitch);

//twitch event handling
botTwitch.on("connected", twitchEvents.onConnectedHandler);
botTwitch.on("message", twitchEvents.onMessageHandler);

//discord event handling
botDiscord.on("ready", discordEvents.onReady);
botDiscord.on("message", discordEvents.onMessage);
botDiscord.on("presenceUpdate", discordEvents.onPresenceUpdate);


//logging the clients in
botTwitch.connect();
botDiscord.login(utils.constants.tokenDiscord);