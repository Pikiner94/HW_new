const formatString = function (string) {
  if (string.length > 40) {
    return string.slice(0, 40) + '...';
  } else {
    return string;
  }
};

console.log(formatString('Всем привет дорогие друзьяasdas d'));
