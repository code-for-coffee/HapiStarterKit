'use strict';

require('dotenv').config();

const Hapi = require('hapi');
const server = new Hapi.Server({
    debug: {
        request: ['error'],
        log: ['error', 'debug']
    }
});

server.connection({
    port: process.env.PORT
});

server.start(function(err) {
    if (err) {
        server.server.log(['error', 'app.js'], err);
    }
    console.log('[hapi] server hosted on ', server.info.uri);
});

module.exports = server;