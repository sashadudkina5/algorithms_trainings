// Ограничение времени	- 1 секунда
// Ограничение памяти	- 64Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Из шахматной доски по границам клеток выпилили связную (не распадающуюся на части) фигуру без дыр.
// Требуется определить ее периметр.

// Формат ввода
// Сначала вводится число N (1 ≤ N ≤ 64) – количество выпиленных клеток.
// В следующих N строках вводятся координаты выпиленных клеток, разделенные пробелом (номер строки и столбца – числа от 1 до 8).
// Каждая выпиленная клетка указывается один раз.

// Формат вывода
// Выведите одно число – периметр выпиленной фигуры (сторона клетки равна единице).

// Примечания
// 1) Вырезан уголок из трех клеток. Сумма длин его сторон равна 8.

// 2) Вырезана одна клетка. Ее периметр равен 4.

// Пример 1
// Ввод
// 3
// 1 1
// 1 2
// 2 1
// Вывод
// 8

// Пример 2
// Ввод
// 1
// 8 8
// Вывод
// 4

// Язык: Node.js 20.10.0

const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split("\n");

const count = parseInt(lines[0], 10);

const coordinates = [];

for (let i = 1; i <= count; i++) {
  const line = lines[i];
  const parts = line.split(" ").map(Number);
  coordinates.push(parts);
}

let coordSet = new Set(coordinates.map((c) => c.join(",")));

let result = 0;
const moves = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

for (let i = 0; i < count; i++) {
  const [x, y] = coordinates[i];
  moves.forEach(([dx, dy]) => {
    const near = [x + dx, y + dy].join(",");
    if (!coordSet.has(near)) {
      result += 1;
    }
  });
}
fs.writeFileSync("output.txt", result.toString());
