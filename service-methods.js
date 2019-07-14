function numberPlusFive(number) {
  return number + 5;
  }

function numberToNumber(call, callback) {
  callback(null, numberPlusFive(call.request));
};

module.exports = {numberToNumber}