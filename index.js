const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('message', msg => {
  msg.reply('pong');
});

client.login('OTI1NTI2MjYzMjk5NDczNDg4.YcuZgA.a5qVEYXCd-F5oWq-pUsgW4-ff0Y');

const prefix = `!`;
client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  // get channel id and command out of message
  const channelId = message.channel.id;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  if (command === 'play') {
    ... 
    // after successfully create the play space, response to the user that call this command.
    message.reply(...);
  }
}