// Require the necessary discord.js classes
const { Client, Intents, Channel, Guild } = require("discord.js");
const { token } = require("./config.json");
// const SetRandomInterval = require("set-random-interval");

// setRandomInterval code
const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
	let timeout;
	const runInterval = () => {
		const timeoutFunction = () => {
			intervalFunction();
			runInterval();
		};
		const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
		timeout = setTimeout(timeoutFunction, delay);
	};
	runInterval();
	return {
		clear() {
			clearTimeout(timeout);
		},
	};
};

// Create a new client instance
const { myIntents } = require("./intents.json");
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

// Global needed
const milliConv = 60000; // For converting milliseconds to minutes
const millihour = 3600000; // For converting milliseconds to hours
const channelrandom = "924216225364574218"; // CHANGE ID BEFORE RUN
const shainaID = "<@479023275390009344>"; // CHANGE ID BEFORE RUN

// Random Activity Change
const mintimeactiv = milliConv * 15;
const maxtimeactiv = milliConv * 60;
const randNumber = () => {
	return Math.random();
};
const newActivity = () => {
	let newNumb = randNumber();
	let newRandActivity = Math.floor(newNumb * activity.length);
	let newRandName = Math.floor(newNumb * activity[newRandActivity].name.length);
	client.user.setActivity(activity[newRandActivity].name[newRandName], { type: activity[newRandActivity].options });
};

// Triggers for listen words
const triggers = require("./words.json");

// Reply to trigger words
client.on("messageCreate", message => {
	if (triggers.some(word => message.content.toLowerCase().includes(word))) {
		message.reply("beep!")
		// let channelreply = client.channels.cache.find(channel => channel.id == message.channelId);
		// channelreply.send("beep!");
	}
});

// Send random message
const mintimebeep = millihour * 12;
const maxtimebeep = millihour * 36;
// const channelrandom = client.channels.cache.get("929655220009578539"); // CHANGE ID BEFORE RUN!!!
function sendRandMessage() {
	client.channels.cache.get(channelrandom).send("beep!");
}

// Random emoji to Shaina
const minTimeShaina = millihour * 24 * 2;
const maxTimeShaina = millihour * 24 * 7;
// const shainaMessage = Guild.members.cache.find(user => user.id === "205187968460259328"); // CHANGE ID BEFORE RUN!!!
const sendRandShaina = () => {
	client.channels.cache.get(channelrandom).send(shainaID + " :heart:");
};

// All random functions
client.on("ready", () => {
	const randActSet = setRandomInterval(() => newActivity(), mintimeactiv, maxtimeactiv);
	const beep = setRandomInterval(() => sendRandMessage(), mintimebeep, maxtimebeep);
	const sendShainaHeart = setRandomInterval(() => sendRandShaina(), minTimeShaina, maxTimeShaina);
});

// Login to Discord with your client"s token
client.login(token);