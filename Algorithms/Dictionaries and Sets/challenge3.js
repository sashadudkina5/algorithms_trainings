// Ограничение времени	- 1 секунда
// Ограничение памяти	- 256Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Дан массив a из n чисел. Найдите минимальное количество чисел, после удаления которых попарная разность оставшихся
// чисел по модулю не будет превышать 1, то есть после удаления ни одно число не должно отличаться от какого-либо
// другого более чем на 1.

// Формат ввода
// Первая строка содержит одно целое число n ( 1 ≤ n ≤ 2 ⋅ 10^5 ) — количество элементов массива a.
// Вторая строка содержит n целых чисел a 1 , a 2 , … , a n ( 0 ≤ a i ≤ 10^5 ) — элементы массива a.

// Формат вывода
// Выведите одно число — ответ на задачу.

// Пример 1
// Ввод
// 5
// 1 2 3 4 5
// Вывод
// 3

// Пример 2
// Ввод
// 10
// 1 1 2 3 5 5 2 2 1 5
// Вывод
// 4

// Язык: Node.js 20.10.0

const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split(/\r?\n/).filter((line) => line);

const numbersCount = parseInt(lines[0], 10);

let numbers = lines[1].split(" ").map(Number);

numbers.sort((a, b) => a - b);

const freq = {};
numbers.forEach((num) => {
  freq[num] = (freq[num] || 0) + 1;
});

let maxGroup = 0;

Object.keys(freq).forEach((num) => {
  num = parseInt(num);
  let currentGroup = freq[num] + (freq[num + 1] || 0);
  maxGroup = Math.max(maxGroup, currentGroup);
});

let result = numbersCount - maxGroup;

fs.writeFileSync("output.txt", result.toString());
