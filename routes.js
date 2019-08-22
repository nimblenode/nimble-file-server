// Imports
const hat            = require("hat");
const path           = require("path");
const flatCache      = require("flat-cache");

const loadHeartbeats = () => {
    return flatCache.load('datastore-heartbeats', path.resolve('./'));
}

const loadCLIs= () => {
    return flatCache.load('datastore-clis', path.resolve('./'));
}

let heartbeats     = loadHeartbeats();
let clis           = loadCLIs()

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

// API functions
Routes.API = {};

// Device functions
Routes.API.device = {};

// View all heartbeats
Routes.API.device.heartbeats = {
  method: 'GET',
  path:'/api/device/heartbeats',
  handler: (request, h) => {
      let payload = request.query
      if (payload.clearall === "true") {
          heartbeats.removeCacheFile();
          heartbeats = loadHeartbeats()
      }
      heartbeats.save();
      return heartbeats.all();
  }
};

module.exports = Routes;
