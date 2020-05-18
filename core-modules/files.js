const fs = require("fs");
//reading a file Synchronously (blocked code)
const data = fs.readFileSync("system.js");
console.log(data); //buffer
console.log(data.toString()); //readable content
//writing (override existing file) in file Synchronously (blocked code)

fs.writeFileSync("data.txt", "Hello WOrld!");
//appending in file Synchronously (blocked code)

fs.appendFileSync("data.txt", " How are you?");
//copying in file Synchronously (blocked code)

fs.copyFileSync("data.txt", "data.copy.txt");
//renaming in file Synchronously (blocked code)

fs.renameSync("data.txt", "data.old.txt");
//removing in file Synchronously (blocked code)

fs.unlinkSync("data.old.txt");

//Directories:
//reading a directory Synchronously (blocked code)

let dir = fs.readdirSync(__dirname);
console.log(dir);

//creating a directory Synchronously (blocked code)
//dir = fs.mkdirSync("file-system");
//console.log(dir);

//moving a file to a directory Synchronously (blocked code)

//fs.renameSync("data.copy.txt", "file-system/data.txt");

//watching files/directories for changes
fs.writeFileSync("data2.txt", "Hello WOrld!");

fs.watchFile("data2.txt", (currStats, prevStats) => {
	console.log("data2.txt file was changed! :");
	console.log("From Stats :", prev);
	console.log("To Stats :", curr);
});
