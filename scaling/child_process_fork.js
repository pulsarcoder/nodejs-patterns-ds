const child_process = require('child_process');

child_process.fork('./server.js', ['8001']);
child_process.fork('./server.js', ['8002']);