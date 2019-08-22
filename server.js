'use strict';

// Include hapijs
const Hapi = require('@hapi/hapi');

// Routes
const Routes = require("./routes")

// Inert
const Inert = require('@hapi/inert');

// Asynchnous wrapper
const init = async () => {

    // Initialize server
    const server = Hapi.server({
          port: 3000,
          host: '0.0.0.0'
    });

    // Add file server
    await server.register(Inert);

    // Register routes
    server.route(Routes.default);
    server.route(Routes.files);

    // Start the server
    await server.start();

    // Display that server has started
    console.log('FILE SERVER %s', server.info.uri);
};


// Quit the server if we have any unhandled exceptions
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
