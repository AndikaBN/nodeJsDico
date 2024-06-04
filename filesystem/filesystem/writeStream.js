const fs = require('fs');

const writableStream = fs.createWriteStream('filesystem/output.txt');

writableStream.write('Hello\n');
writableStream.write('World\n');
writableStream.end();