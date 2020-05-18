const chalk = require("chalk");

const error = (msg) => {
	console.log(chalk.red(msg));
};

const success = (msg) => {
	console.log(chalk.green(msg));
};
//Exports
//general
// module.exports = {
// 	key: value
// 	key2:value2
// };

module.exports = {
	error,
	success,
};
