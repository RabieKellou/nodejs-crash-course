const http = require("http");

const server = http.createServer((request, response) => {
	const name = request.url.slice(1) || "user";
	response.writeHead(200, { "Content-Type": "text/html" });
	response.end(`<h1>Hello ${name} from the web server!`);
});

server.listen(8080, "localhost");
