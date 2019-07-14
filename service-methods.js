function numberPlusFive({number}) {
  console.log('in number plus five', number);
  return {number: number + 5};
  }

function numberToNumber(call, callback) {
  console.log('inside of numberToNumber')
  console.log('callback', callback)
  console.log('call:', call)
  callback(null, numberPlusFive(call.request));
};

module.exports = {numberToNumber}