const os = require("os");

console.log("userinfo :", os.userInfo());

console.log("Platform :", os.platform());
console.log("CPUs :", os.cpus());

// those are not part of the os module:
console.log("Current working directory : ", __dirname);
console.log("Current running file : ", __filename);

// to export a variable (on terminal) : export VAR_NAME=VALUE
console.log(process.env); //show all env variables
console.log(process.env.DATABASE_PASS); //user exported variable