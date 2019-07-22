const grpc = require("grpc");
const {routeguide} = require("./routeguide");

const stub = new routeguide.RouteGuide(
  "localhost:3000",
  grpc.credentials.createInsecure(),
);

const stub2 = new routeguide.RouteGuide(
  "localhost:2998",
  grpc.credentials.createInsecure(),
);

const stub3 = new routeguide.Streaming(
  "localhost:5555",
  grpc.credentials.createInsecure(),
);

// console.log(Object.keys(stub.__proto__.numberToNumber));
const interceptorProvider = function(options, nextCall) {
  // console.log("options:", options);
  var requester = {
    start: function(metadata, listener, next) {
      console.log("metadata start", metadata);
      var newListener = {
        onReceiveMetadata: function(metadata, next) {
          console.log("metadata on Receive meta", metadata);
          next(metadata);
        },
        onReceiveMessage: function(message, next) {
          // console.log("metadata on Receive message", metadata);
          next(message);
        },
        onReceiveStatus: function(status, next) {
          // console.log("metadata on receive status", metadata);
          next(status);
        }
      };
      next(metadata, newListener);
    },
    sendMessage: function(message, next) {
      // console.log("sendmessage", message);
      next(message);
    },
    halfClose: function(next) {
      // console.log("halfclose");
      next();
    },
    cancel: function(message, next) {
      // console.log("cancel", message);
      next();
    }
  };
  return new grpc.InterceptingCall(nextCall(options), requester);
};

const ourNumber = {
  number: 10
};

// SERVER STREAMING
const meta = new grpc.Metadata();
meta.set("hello", "world");

//instantiate connection to server, bidi is a readable and writable stream (duplex)
const bidi = stub.bidiNumbers();

bidi.write(ourNumber);
console.time("label");

//set event listener for readable stream
bidi.on("data", data => {
  // console.log("data from server:", data);
  const { number } = data;
  bidi.write({ number: number });
});

bidi.on("end", () => {
  // console.log("end:", count);
  console.timeEnd("label");
});

stub.numberToNumber({number: 3}, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(response);
  }
});

const bidi2 = stub2.bidiNumbers();

bidi2.write(ourNumber);
console.time("label2");

//set event listener for readable stream
bidi2.on("data", data => {
  // console.log("data from server:", data);
  const { number } = data;
  bidi2.write({ number: number });
});

bidi2.on("end", () => {
  // console.log("end:", count);
  console.timeEnd("label2");
});

stub2.numberToNumber({number: 99}, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(response);
  }
});

const bidi3 = stub3.bidiTwice();

bidi3.write(ourNumber);
console.time("label3");

//set event listener for readable stream
bidi3.on("data", data => {
  console.log("data from server:", data);
  const { number } = data;
  bidi3.write({ number: number });
});

bidi3.on("end", () => {
  // console.log("end:", count);
  console.timeEnd("label3"); 
});

const {
  numberToNumber,
  streamNumbers,
  bidiNumbers
} = require("./service-methods");

const {
  bidiTwice,
} = require("./streaming-methods");

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
  return server;
}

console.log('bidiTwice', 54 / 399); 

const routeServer = getServer();
routeServer.bind("0.0.0.0:5555", grpc.ServerCredentials.createInsecure());
routeServer.start();
