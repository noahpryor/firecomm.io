const grpc = require('grpc');
const routeguide = require('./routeguide');


const stub = new routeguide.RouteGuide(
    'localhost:3000', grpc.credentials.createInsecure());

stub.numberToNumber(3, function(err, number) {
  if (err) console.log(err);
  console.log(number)
})
