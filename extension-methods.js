const grpc = require("grpc");

function numberPlusFive({ number }) {
  return { numbers: [number ** 5, number ** 3, number ** 65] };
}

function numberToNumArr(call, callback) {
  // console.log("inside of numberToNumber");
  // console.log("callback", callback);
  // console.log("call:", call);
  const meta = new grpc.Metadata();
  meta.set("hello", "world");
  call.sendMetadata(meta);
  // first argument to callback is error
  callback(null, numberPlusFive(call.request), meta);
}

module.exports = {
  numberToNumArr,
}