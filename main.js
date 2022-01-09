// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const {myIntents} = require("./intents.json");
const client = new Client({ intents: myIntents });

const randSong = [
	"Weezer",
	"Massive Attack",
	"Zerwee",
	"Minecraft",
];

const random = Math.floor(Math.random() * randSong.length);

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ichigo is awake!");
	client.user.setActivity(randSong[random], { type: "LISTENING" });
});

// Triggers for listen words
const triggers = [
	"seed",
	"weezer",
	"shaina",
];

client.on("messageCreate", message => {
	if (triggers.some(word => message.content.includes(word))) {
		message.reply("beep!")
	  };
});

// Login to Discord with your client"s token
client.login(token);