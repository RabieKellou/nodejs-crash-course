const crypto = require("crypto");
//MD5 (old not very secure anymore)
const hashMD5 = crypto.createHash("md5").update("Mypassword").digest("hex");

//SHA256 more secure than md5
const secret = "secret key";
const hashSHA256 = crypto
	.createHmac("sha256", secret)
	.update("Mypassword")
	.digest("hex");

console.log("md5 : ", hashMD5);
console.log("sha256 : ", hashSHA256);
