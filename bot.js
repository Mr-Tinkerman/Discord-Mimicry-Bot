const Discord = require("discord.js");
const client = new Discord.Client();
const config_file = require("./config.json");
var prefix = config_file.prefix;


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  if (command === "ping") 
  {
    message.channel.send("pong");
  } 
  else 
    if (command === "clear")
    {
      if (message.member.hasPermission("MANAGE_MESSAGES")) 
      {
        message.channel.fetchMessages().then(function(list){message.channel.bulkDelete(list);}, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
      }
    }
});

client.login(process.env.BOT_TOKEN);
