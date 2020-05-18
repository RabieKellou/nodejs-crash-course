const crypto = require("crypto");

const algorithm = "aes-192-cbc";
const password = "PAssword used to genertae a key";
const key = crypto.scryptSync(password, "salt", 24);
const decipher = crypto.createDecipher(algorithm, key);

let decrypted = "";

decipher.on("readable", () => {
	let chunk;
	while (null !== (chunk = decipher.read())) {
		decrypted += chunk.toString("utf8");
	}
});

decipher.on("end", () => console.log(decrypted));
const encrypted =
	"9583bb367db28cd611a7d368bd46da03b4238a6bcf15107d21fd123c14ed837d";
decipher.write(encrypted, "hex");
decipher.end();
