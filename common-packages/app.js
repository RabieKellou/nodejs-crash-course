const chalk = require("chalk"); //style terminal output
const axios = require("axios"); // make http requests
const commander = require("commander"); //handle command line arguments
//Chalk
console.log(chalk.red.inverse("An error has occured!"));

//axios
//general
/*
axios·
	.get("url")
	.then((results) => {
		console.log(results);
	})
	.catch((err) => {
		console.log(err);
    });
    */
//Commander
commander
	.option("-t --type <type>", "Lookup type")
	.option("-n --number <number>", "Resource id")
	.parse(process.argv);
//Get Request example
axios
	.get(`https://swapi.dev/api/${commander.type}/${commander.number}`)
	.then((results) => {
		console.log(results.data);
	})
	.catch((err) => {
		console.log(err);
	});
