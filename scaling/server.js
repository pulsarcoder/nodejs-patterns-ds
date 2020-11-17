const http = require('http');
const port = parseInt(process.argv[2] || '8000');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Coming from ${process.pid}`);
}).listen(port);

console.log('listening port ', port);
