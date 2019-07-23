const {routeguide} = require("./routeguide");
const {extension} = require("./extension-loader");
// const {routeguide} = require("./streaming-package");
const grpc = require("grpc");

const {
  numberToNumber,
  streamNumbers,
  bidiNumbers
} = require("./service-methods"); 

const {
  bidiTwice,
} = require("./streaming-methods");

const {
  numberToNumArr,
} = require("./extension-methods");

function getServer() {
  var server = new grpc.Server();
  server.addService(routeguide.RouteGuide.service, {
    numberToNumber,
    streamNumbers,
    bidiNumbers,
  });
  server.addService(routeguide.Streaming.service, {
    bidiTwice,
  });
  server.addService(extension.Extend.service, {
    numberToNumArr,
  })
  return server; 
} 

const routeServer = getServer();
routeServer.bind("0.0.0.0:3000", grpc.ServerCredentials.createInsecure());
routeServer.bind("0.0.0.0:2999", grpc.ServerCredentials.createInsecure());
routeServer.bind("0.0.0.0:2998", grpc.ServerCredentials.createInsecure());
routeServer.bind("0.0.0.0:2997", grpc.ServerCredentials.createInsecure());
routeServer.bind("0.0.0.0:6666", grpc.ServerCredentials.createInsecure());

 
routeServer.start();
