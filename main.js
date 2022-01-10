// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const {myIntents} = require("./intents.json");
const client = new Client({ intents: myIntents });

// Calls in the activity
const activity = require("./activity.json"); // call JSON for activities
let randomActivity = Math.floor(Math.random() * activity.length); // selects random activity
let randomName = Math.floor(Math.random() * activity[randomActivity].name.length); // selects random name
let activityOptions = activity[randomActivity].options; // selects to appropriate options
// Return in console
// console.log(activity[randomActivity].name[randomName]);
// console.log(activityOptions);

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ichigo is awake!");
	client.user.setActivity(activity[randomActivity].name[randomName], { type: activityOptions });
});

// Triggers for listen words
const triggers = require("./words.json");

client.on("messageCreate", message => {
	if (triggers.some(word => message.content.toLowerCase().includes(word))) {
		message.reply("beep!")
	  };
});

// Login to Discord with your client"s token
client.login(token);