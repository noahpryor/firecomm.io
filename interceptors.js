const grpc = require('grpc');
const routeguide = require('./routeguide');


const stub = new routeguide.RouteGuide(
    'localhost:3000', grpc.credentials.createInsecure());

console.log(Object.keys(stub.__proto__.numberToNumber));

const interceptor = function(options, nextCall) {
  console.log('inside of interceptor');
  return new grpc.InterceptingCall(nextCall(options), {
    sendMessage: function(message, next) {
      console.log('message:', message);
      next(message);
    }
  });
};

// console.log(grpc);
// const provider = grpc.InterceptorProvider(stub.numberToNumber.path);

// console.log('path', stub.numberToNumber.path)

// stub.numberToNumber.interceptors.push(interceptor);

const ourNumber = {
  number: 3
};

stub.numberToNumber(
    ourNumber, {interceptors: [interceptor]}, function(err, number) {
      if (err) console.log(err);
      console.log(number);
    });