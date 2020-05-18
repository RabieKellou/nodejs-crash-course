const dns = require("dns");

//lookup (look in host first) or resolve (dns provider first)
dns.lookup("google.com", (err, value) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("lookup : ", value);
});
dns.resolve("google.com", (err, value) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("resolve : ", value);
});
//MX for mail exchange
dns.resolve("google.com", "MX", (err, value) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("resolve : ", value);
});
//check who owns the ip address
dns.reverse("8.8.8.8", (err, value) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("reverse : ", value);
});
