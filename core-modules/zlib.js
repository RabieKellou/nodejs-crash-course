const zlib = require("zlib");
const fs = require("fs");

const gzip = zlib.createGzip();

const input = fs.createReadStream("hugeFile.html");
const output = fs.createWriteStream("hugeFile.html.gz");

input.pipe(gzip).pipe(output);
