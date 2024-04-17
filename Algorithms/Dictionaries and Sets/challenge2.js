// Ограничение времени	- 1 секунда
// Ограничение памяти	- 64Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Задано две строки, нужно проверить, является ли одна анаграммой другой.
// Анаграммой называется строка, полученная из другой перестановкой букв.

// Формат ввода
// Строки состоят из строчных латинских букв, их длина не превосходит 100000. Каждая записана в отдельной строке.

// Формат вывода
// Выведите "YES" если одна из строк является анаграммой другой и "NO" в противном случае.

// Пример 1
// Ввод
// dusty
// study

// Вывод
// YES

// Пример 2
// Ввод
// rat
// bat

// Вывод
// NO

// Язык: Node.js 20.10.0

const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const words = fileContent.split(/\r?\n/).filter((line) => line.trim() !== "");

let secondWordFreq = {};
let firstWordFreq = {};
let result = "YES";

const countLetters = (word, freq) => {
  for (const letter of word) {
    if (freq[letter]) {
      freq[letter]++;
    } else {
      freq[letter] = 1;
    }
  }
  return freq;
};

countLetters(words[1], secondWordFreq);
countLetters(words[0], firstWordFreq);

for (const letter in firstWordFreq) {
  if (firstWordFreq[letter] !== secondWordFreq[letter]) {
    result = "NO";
    break;
  }
}

fs.writeFileSync("output.txt", result.toString());
