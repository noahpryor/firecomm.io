const grpc = require('grpc');
const routeguide = require('./routeguide');


const stub = new routeguide.RouteGuide(
    'localhost:3000', grpc.credentials.createInsecure());

// console.log(Object.keys(stub.__proto__.numberToNumber));
// var interceptor = function(options, nextCall) {
//   console.log('inside of interceptor');
//   return new grpc.InterceptingCall(nextCall(options), {
//     sendMessage: function(message, next) {
//       console.log(message);
//       next(message);
//     }
//   });
// };

// console.log(grpc);
// const provider = grpc.InterceptorProvider(stub.numberToNumber.path);
// console.log(provider)

// console.log('path', stub.numberToNumber.path)

// stub.numberToNumber.interceptors.push(interceptor);

const ourNumber = {
  number: 3
};

stub.numberToNumber(ourNumber, function(err, number) {
  if (err) console.log(err);
  console.log(number);
});

const numberStream = stub.streamNumbers(ourNumber);

numberStream.on('data', (data) => {
  console.log('data: ', data);
});

numberStream.on('end', () => {
  console.log('end:');
});

numberStream.on('error', (e) => {
  console.log('end: ', e);
});

numberStream.on(
    'status',
    (status) => {
      console.log('status:', status);
    })

    // stub.numberToNumber(ourNumber, {interceptors: [interceptor]});
