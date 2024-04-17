// Ограничение времени	- 1 секунда
// Ограничение памяти	- 64Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// На клетчатой плоскости закрашено K клеток. Требуется найти минимальный по площади прямоугольник,
// со сторонами, параллельными линиям сетки, покрывающий все закрашенные клетки.

// Формат ввода
// Во входном файле, на первой строке, находится число K (1 ≤ K ≤ 100).
// На следующих K строках находятся пары чисел Xi и Yi — координаты закрашенных клеток (|Xi|, |Yi| ≤ 109).

// Формат вывода
// Выведите в выходной файл координаты левого нижнего и правого верхнего углов прямоугольника.

// Пример
// Ввод
// 0 7
// 12 5

// Вывод
// 25

// Язык: Node.js 20.10.0

const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split("\n");

const K = parseInt(lines[0], 10);

const coordinates = [];

for (let i = 1; i <= K; i++) {
  const line = lines[i];
  const parts = line.split(" ").map(Number);
  coordinates.push(parts);
}

let minX = Infinity,
  maxX = -Infinity;
let minY = Infinity,
  maxY = -Infinity;

// Обход всех координат
for (let i = 0; i < K; i++) {
  const [x, y] = coordinates[i];

  // Обновление минимальных и максимальных значений
  if (x < minX) minX = x;
  if (x > maxX) maxX = x;
  if (y < minY) minY = y;
  if (y > maxY) maxY = y;
}

const result = `${minX} ${minY} ${maxX} ${maxY}`;

fs.writeFileSync("output.txt", result);
