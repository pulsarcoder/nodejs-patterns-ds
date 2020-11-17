const express = require('express');

const service = express();

export default (config) => {
    const log = config.log();
    // Add a request logging middleware in development mode
    if (service.get('env') === 'development'){
        service.use((req, res, next) => {
            log.debug(`${req.method}: ${req.url}`);
            return next();
        })
    }

    service.use((error, req, res, next) => {

    })
}