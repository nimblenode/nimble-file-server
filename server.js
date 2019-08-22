'use strict';

// Include hapijs
const Hapi = require('@hapi/hapi');

// Routes
const Routes = require("./routes")

// Asynchnous wrapper
const init = async () => {

    // Initialize server
    const server = Hapi.server({
          port: 3000,
          host: '0.0.0.0'
    });

    // Register routes
    server.route(Routes.default);
    server.route(Routes.API.device.heartbeats);
    server.route(Routes.API.device.heartbeat);
    server.route(Routes.API.device.clis);
    server.route(Routes.API.device.cli_command_push);
    server.route(Routes.API.device.cli_command_pull);
    server.route(Routes.API.device.cli_response_pull);
    server.route(Routes.API.device.cli_response_push);

    // Start the server
    await server.start();

    // Display that server has started
    console.log('RELAY SERVER %s', server.info.uri);
};


// Quit the server if we have any unhandled exceptions
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
