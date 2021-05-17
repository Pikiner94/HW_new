function findLongestWord(string) {
  const arrayOfWord = string.split(' ');
  let longestWord = arrayOfWord[0];

  for (let i = 1; i < arrayOfWord.length; i += 1) {
    if (arrayOfWord[i].length > longestWord.length) {
      longestWord = arrayOfWord[i];
    }
  }
  return `Самое длинное слово: ${longestWord}, длинна слова: ${longestWord.length}`;
}

console.log(findLongestWord('Меня зовут Марс я сильно кричу лечукоазису'));
