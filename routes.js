// Imports
const hat            = require("hat");

// Routes holder
var Routes = {};

// Default API route
Routes.default = {
    method: 'GET',
    path:'/',
    handler: (request, h) => {
        return {
          message: "Welcome to the Nimble File Server",
          time: Date.now(),
          time_formatted: Date().toString()
        }
    }
};

// Files
Routes.files = {
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public',
            redirectToSlash: true,
            index: true,
        }
    }
});

module.exports = Routes;
