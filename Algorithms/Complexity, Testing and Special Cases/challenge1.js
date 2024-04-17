// Ограничение времени	- 1 секунда
// Ограничение памяти	- 64Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Вася и Маша участвуют в субботнике и красят стволы деревьев в белый цвет.
// Деревья растут вдоль улицы через равные промежутки в 1 метр. Одно из деревьев обозначено числом ноль,
// деревья по одну сторону занумерованы положительными числами 1,2 и т.д., а в другую — отрицательными −1,−2 и т.д.
// Ведро с краской для Васи установили возле дерева P, а для Маши — возле дерева Q.
// Ведра с краской очень тяжелые и Вася с Машей не могут их переставить, поэтому они окунают кисть в ведро
// и уже с этой кистью идут красить дерево. Краска на кисти из ведра Васи засыхает,
// когда он удаляется от ведра более чем на V метров, а из ведра Маши — на M метров.
// Определите, сколько деревьев может быть покрашено.

// Формат ввода
// В первой строке содержится два целых числа  P и V — номер дерева, у которого стоит ведро Васи
// и на сколько деревьев он может от него удаляться.
// В второй строке содержится два целых числа Q и M — аналогичные данные для Маши.
// Все числа целые и по модулю не превосходят 10^8.

// Формат вывода
// Выведите одно число — количество деревьев, которые могут быть покрашены.

// Пример
// Ввод
// 0 7
// 12 5

// Вывод
// 25

// Язык: Node.js 20.10.0

const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.trim().split("\n");

const [P, V] = lines[0].split(" ").map(Number);
const [Q, M] = lines[1].split(" ").map(Number);

const minTreeVasya = P - V;
const maxTreeVasya = P + V;

const minTreeMasha = Q - M;
const maxTreeMasha = Q + M;

let L = 0;

if (minTreeMasha <= maxTreeVasya && minTreeMasha >= minTreeVasya) {
  if (maxTreeMasha <= maxTreeVasya) {
    L = V * 2 + 1;
  } else {
    L = Math.abs(maxTreeMasha - minTreeVasya) + 1;
  }
} else if (minTreeVasya <= maxTreeMasha && minTreeVasya >= minTreeMasha) {
  if (maxTreeVasya <= maxTreeMasha) {
    L = 2 * M + 1;
  } else {
    L = Math.abs(maxTreeVasya - minTreeMasha) + 1;
  }
} else {
  L = 2 * (V + M + 1);
}

fs.writeFileSync("output.txt", L.toString());
