'use strict';

require('dotenv').config();

const Hapi = require('hapi');
const server = new Hapi.Server({
    debug: { request: ['error'] }
});

server.connection({
    port: process.env.PORT
});

server.start(function(err) {
    server.log(['start', 'app.js'], server.info);
    if (err) {
        server.log(['error', 'app.js'], err);
    }
    console.log('[hapi] server hosted on ', server.info.uri);
});

module.exports = server;