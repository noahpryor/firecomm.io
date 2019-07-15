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

function streamNumbers(call) {
  console.log('inside of streamNumbers');
  const myInterval = setInterval(() => {
    call.write(numberPlusFive(call.request));
  }, 50);
  setTimeout(() => {
    clearInterval(myInterval);
    call.end();
  }, 500)
}

module.exports = {
  numberToNumber,
  streamNumbers
}