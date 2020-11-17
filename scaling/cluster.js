const cpus = require('os').cpus();
const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running and forking upto ${cpus.length}`);
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${process.pid} died, total workers ${Object.keys(cluster.workers).length} remaining`);
        cluster.fork();
        console.log('serving totally ', Object.keys(cluster.workers).length, 'now');
    })
} else {
    http.createServer((req, res) => {
        const msg = `response from ${process.pid}`;
        res.end(msg);

        if (req.url === '/kill') {
            console.log(`killing ${process.pid}`);
            process.exit();
        } else if (req.url === '/') {
            console.log(msg);
        }
    }).listen(8000);
    const msg = `forked from ${process.pid}`;
    console.log(msg);
}