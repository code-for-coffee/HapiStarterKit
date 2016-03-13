'use strict';

require('dotenv').config();

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
    port: process.env.PORT
});

server.start(function(err) {
    console.log('[hapi] server hosted on ', server.info.uri);
});

module.exports = server;