const routeguide = require('./routeguide');
const grpc = require('grpc');

const {numberToNumber} = require('./service-methods');

function getServer() {
  var server = new grpc.Server();
  server.addService(routeguide.RouteGuide.service, {
    numberToNumber,
  });
  return server;
};

var routeServer = getServer();
routeServer.bind('0.0.0.0:3000', grpc.ServerCredentials.createInsecure());
routeServer.start();