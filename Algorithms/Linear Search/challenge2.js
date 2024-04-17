// Ограничение времени	- 1 секунда
// Ограничение памяти	- 64Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Вася решил заняться торговлей рыбой. С помощью методов машинного обучения он предсказал цены на рыбу на N дней вперёд.
// Он решил, что в один день он купит рыбу, а в один из следующих дней — продаст (то есть совершит или ровно одну покупку и
// продажу или вообще не совершит покупок и продаж, если это не принесёт ему прибыли). К сожалению, рыба — товар скоропортящийся
// и разница между номером дня продажи и номером дня покупки не должна превышать K.

// Определите, какую максимальную прибыль получит Вася.

// Формат ввода
// В первой строке входных данных задаются числа N и K (1 ≤ N ≤ 10000, 1 ≤ K ≤ 100).

// Во второй строке задаются цены на рыбу в каждый из N дней. Цена — целое число, которое может находится в пределах от 1 до 109.

// Формат вывода
// Выведите одно число — максимальную прибыль, которую получит Вася.

// Пример 1
// Ввод
// 5 2
// 1 2 3 4 5

// Вывод
// 2

// Пример 2
// Ввод
// 5 2
// 5 4 3 2 1

// Вывод
// 0

// Язык: Node.js 20.10.0

const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split("\n");

const firstLineParts = lines[0].split(" ").map(Number);
const daysCount = firstLineParts[0];
const expireDays = firstLineParts[1];

const prices = lines[1].split(" ").map(Number);
prices.push("stop");

let maxValue = 0;

for (let i = 0; i < prices.length - 1; i++) {
  //проходимся по каждому элементу в prices

  for (let j = i + 1; j <= expireDays + i && prices[j] !== "stop"; j++) {
    // проходимся по последующим K дням от дня prices[i]
    if (prices[i] >= prices[j]) {
      break;
    }

    let currentValue = prices[j] - prices[i];
    if (currentValue > maxValue) {
      maxValue = currentValue;
    }
  }
}

fs.writeFileSync("output.txt", maxValue.toString());
