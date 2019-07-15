// function serverInterceptor(call, nextCall) {
//   //if conditional
//   nextCall(call)
// }

//secret

function numberPlusFive({ number }) {
  return { number: number + 5 };
}

//EXAMPLE CALL OBJECT
// ServerUnaryCall {
//   _events: [Object: null prototype] { error: [Function] },
//   _eventsCount: 1,
//   _maxListeners: undefined,
//   call: Call {},
//   cancelled: false,
//   metadata:
//    Metadata {
//      _internal_repr:
//       { 'user-agent': [ 'grpc-node/1.22.2 grpc-c/7.0.0 (osx; chttp2; gale)' ] },
//      flags: 0 },
//   request: { number: 3 } }

function numberToNumber(call, callback) {
  // console.log("inside of numberToNumber");
  // console.log("callback", callback);
  console.log("call:", call);
  callback(null, numberPlusFive(call.request));
}

function streamNumbers(call) {
  // console.log("inside of streamNumbers");
  console.log(call);
  const myInterval = setInterval(() => {
    call.write(numberPlusFive(call.request));
  }, 50);
  setTimeout(() => {
    clearInterval(myInterval);
    call.end();
  }, 500);
}

// function methodWrapper(method, interceptors) {

// }

module.exports = {
  numberToNumber,
  streamNumbers
};
