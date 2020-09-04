// server.js
// where the discord and express apps start

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const Discord = require("discord.js");
const client = new Discord.Client();
const expressApp = express();
const fs = require('fs')
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const prefix = 'n!'

const bannedStatements = process.env.BANNED_STATEMENTS
const bannedStatementsArray = bannedStatements.split('   ')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on("ready", () => {
  client.user.setActivity(
    "you weirdos | n!help",
    { type: "WATCHING" }
  );
  console.log(
    `ready, cap'n, logged in as ${client.user.tag}, ID aka#${client.user.id}.`
  );
  console.log(`current status: ${client.user.presence.status}`);
});

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

client.on("message", message => {
  if ((message.content==="<@494525821848125440>") || (message.content==='<@!494525821848125440>')) {
    return message.channel.send('you rang?')
  }
  
  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const commandName = args.shift().toLowerCase();
  
  if (commandName.toLowerCase()=='stop') {command.stop(message, args, client)}

  if (!client.commands.has(commandName)) return console.log("invalid command");
  const command = client.commands.get(commandName)

  if (command.guildOnly && message.channel.type !== 'text') {return message.reply('bruh this is my dms')}

  try {
	  command.execute(message, args)
  } catch (error) {
	  console.error(error);
	  message.reply('there was an error trying to execute that command!');
  }
});

// the default array of features
const features = [
  "have an existential crisis upon being asked litearlly anything",
  "Cure my depression (cancelled due to difficulty)",
  "make this feature list actually submit features (cancelled because no)"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
expressApp.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
expressApp.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of features to the webpage
expressApp.get("/features", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(features);
});

// listen for requests :)
const listener = expressApp.listen(process.env.PORT, () => {
  console.log(
    "frontend web app loaded, listener started on port " +
      listener.address().port
  );
});

client.login(process.env.TOKEN);
