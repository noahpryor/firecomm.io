const grpc = require('grpc');
const routeguide = require('./routeguide');


const stub = new routeguide.RouteGuide(
    'localhost:3000', grpc.credentials.createInsecure());

console.log(stub);

const ourNumber = {
  number: 3
};

stub.numberToNumber(ourNumber, function(err, number) {
  if (err) console.log(err);
  console.log(number);
});
