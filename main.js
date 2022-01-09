// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const {myIntents} = require("./config.json");
const client = new Client({ intents: myIntents });

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ichigo is awake!");
});

// Triggers for listen words
const triggers = [
	"seed",
	"weezer",
	"shaina",
];

client.on("messageCreate", message => {
	if (message.content == "hello") message.reply("beep!");
});

// Login to Discord with your client"s token
client.login(token);