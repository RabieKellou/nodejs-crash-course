const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
	//wrong way
	/*fs.readFile("./hugeFile.html", (err, data) => {
		if (err) throw err;
		response.end(data);
    });*/

	//right way
	const file = fs.createReadStream("./myblog.txt");
	file.pipe(response);
});

server.listen(8080, "localhost");
