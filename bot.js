const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643813432772132867")
setInterval(function() {
channel.send(`love2 love2 love2 love2`);
}, 30)
})

client.login(process.env.BOT_TOKEN);