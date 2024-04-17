// Ограничение времени	- 1 секунда
// Ограничение памяти	- 64Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Вам дана последовательность измерений некоторой величины. Требуется определить, повторялась ли какое-либо число,
// причём расстояние между повторами не превосходило k.

// Формат ввода
// В первой строке задаются два числа n и k (1 ≤ n, k ≤ 10^5).

// Во второй строке задаются n чисел, по модулю не превосходящих 10^9.

// Формат вывода
// Выведите YES, если найдется повторяющееся число и расстояние между повторами не превосходит k и NO в противном случае.

// Пример 1
// Ввод
// 4 2
// 1 2 3 1

// Вывод
// NO

// Пример 2
// Ввод
// 4 1
// 1 0 1 1

// Вывод
// YES

// Пример 3
// Ввод
// 6 2
// 1 2 3 1 2 3

// Вывод
// NO

// Язык: Node.js 20.10.0

const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split(/\r?\n/).filter((line) => line);

const [numbersCount, diff] = lines[0].split(" ").map(Number);

const numbers = lines[1].split(" ").map(Number);

let result = "NO";

const indicesMap = new Map();

for (let i = 0; i < numbers.length; i++) {
  if (indicesMap.has(numbers[i])) {
    const firstIndex = indicesMap.get(numbers[i]);
    const secondIndex = i;
    if (secondIndex - firstIndex <= diff) {
      result = "YES";
      break;
    } else {
      indicesMap.set(numbers[i], i);
    }
  } else {
    indicesMap.set(numbers[i], i);
  }
}
fs.writeFileSync("output.txt", result);
