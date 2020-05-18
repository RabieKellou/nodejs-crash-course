const events = require("events");

let usersLoggedIn = 0;

//create an event emitter
const eventEmitter = new events.EventEmitter();
eventEmitter.on("userLoggedIn", () => {
	usersLoggedIn++;
	console.log(`There are ${usersLoggedIn} users logge in`);
});

//generate an event
eventEmitter.emit("userLoggedIn");
eventEmitter.emit("userLoggedIn");
