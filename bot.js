const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('653245388559613962');
});

client.on('ready', () => {
  client.user.setActivity("help l shows help page.", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === '@everyone') {
	  msg.channel.send(`@everyone`)
  }
  if (msg.content === 'help') {
	  msg.channel.send(`@everyone`)
  }
});

client.login(tokens.token);