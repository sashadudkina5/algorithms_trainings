// Ограничение времени	- 3 секунды
// Ограничение памяти	- 64Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Дан массив из N целых чисел. Все числа от − 10^9 до 10^9.
// Нужно уметь отвечать на запросы вида “Cколько чисел имеют значения от L до R ?”.

// Формат ввода
// Число N ( 1 ≤ N ≤ 10^5 ).
// Далее N целых чисел. Затем число запросов K ( 1 ≤ K ≤ 10^5 ).
// Далее K пар чисел L , R ( − 10^9 ≤ L ≤ R ≤ 10^9 ) — собственно запросы.

// Формат вывода
// Выведите K чисел — ответы на запросы.

// Пример
// Ввод
// 5
// 10 1 10 3 4
// 4
// 1 10
// 2 9
// 3 4
// 2 2

// Вывод
// 5 2 2 0

// Язык: Node.js 20.10.0

const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split(/\r?\n/).filter((line) => line);

let mainArr = lines[1].split(" ").map(Number);

const numberOfRequests = Number(lines[2]);
const requests = lines
  .slice(3, 3 + numberOfRequests)
  .map((line) => line.split(" ").map(Number));

mainArr.sort((a, b) => a - b);

function binarySearch(arr, target, searchFirst) {
  let start = 0;
  let end = arr.length;
  let ans = searchFirst ? arr.length : -1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (searchFirst ? arr[mid] < target : arr[mid] <= target) {
      start = mid + 1;
    } else {
      ans = mid;
      end = mid;
    }
  }

  return ans;
}

let result = "";

requests.forEach((request) => {
  const [L, R] = request;

  const leftIndex = binarySearch(mainArr, L, true);
  const rightIndex = binarySearch(mainArr, R + 1, true) - 1;

  const count = leftIndex <= rightIndex ? rightIndex - leftIndex + 1 : 0;
  result += (result ? " " : "") + count;
});

fs.writeFileSync("output.txt", result);
