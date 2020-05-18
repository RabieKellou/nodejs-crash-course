const fs = require("fs");
//,Nodejs callbacks are error first so it's important to  handle the error first
fs.readFile("/none-existent/file/here", (err, data) => {
	if (err) {
		console.log(err);
		console.log("function exiting...");
		return;
	}
	console.log(data);
});
