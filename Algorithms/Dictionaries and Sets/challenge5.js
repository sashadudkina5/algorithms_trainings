// Ограничение времени	- 1 секунда
// Ограничение памяти	- 64Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Вам даны три списка чисел. Найдите все числа, которые встречаются хотя бы в двух из трёх списков.

// Формат ввода
// Во входных данных описывается три списка чисел. Первая строка каждого описания списка состоит из длины списка n (1 ≤ n ≤ 1000).
//  Вторая строка описания содержит список натуральных чисел, записанных через пробел. Числа не превосходят 10^9.

// Формат вывода
// Выведите все числа, которые содержатся хотя бы в двух списках из трёх, в порядке возрастания.
// Обратите внимание, что каждое число необходимо выводить только один раз.

// Пример 1
// Ввод
// 2
// 3 1
// 2
// 1 3
// 2
// 1 2
// Вывод
// 1 3

// Пример 2
// Ввод
// 3
// 1 2 2
// 3
// 3 4 3
// 1
// 5
// Вывод

// Язык: Node.js 20.10.0

const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split(/\r?\n/).filter((line) => line);

const list1 = lines[1].split(" ").map(Number);
const list2 = lines[3].split(" ").map(Number);
const list3 = lines[5].split(" ").map(Number);

const set1 = new Set(list1);
const set2 = new Set(list2);
const set3 = new Set(list3);

const counts = {};

const addToCounts = (set) => {
  set.forEach((num) => {
    if (counts[num]) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }
  });
};

addToCounts(set1);
addToCounts(set2);
addToCounts(set3);

const result = Object.keys(counts)
  .filter((num) => counts[num] >= 2)
  .map(Number)
  .sort((a, b) => a - b)
  .join(" ");

fs.writeFileSync("output.txt", result.toString());
