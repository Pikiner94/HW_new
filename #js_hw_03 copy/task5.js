const checkForSpam = function (message) {
  let wordOfArray = message.split(' ');

  for (let word of wordOfArray) {
    if (word == 'spam' || word == 'sale') return true;
  }
  return false;
};

console.log(checkForSpam('фыд во фыдл овфы'));
