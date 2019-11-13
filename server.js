'use strict';

// HTTP Server
let http = require('http')

// Parse URL
let parseUrl = require('parseurl')

// Send
let send = require('send')

// Server HTTP
let server = http.createServer(function onRequest (req, res) {
    send(req, parseUrl(req).pathname, { root: './storage/' }).pipe(res)
})

server.listen(3000)
