// Ограничение времени	- 2 секунды
// Ограничение памяти	- 256Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Поле в игре в одномерный морской бой имеет размеры 1 × n.
// Ваша задача — найти такое максимальное k , что на поле можно расставить один корабль размера 1 × k,
// два корабля размера 1 × ( k − 1 ) , … , k кораблей размера 1 × 1,
// причем корабли, как и в обычном морском бое, не должны касаться друг друга и пересекаться.

// Формат ввода
// В единственной строке входных данных дано число n — количество клеток поля ( 0 ≤ n ≤ 10^18 ).

// Формат вывода
// Выведите единственное число — такое максимальное k, что можно расставить корабли, как описано в условии.

// Пример
// Ввод
// 7
// Вывод
// 2

// Язык: Node.js 20.10.0

const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8").trim();

let n = Number(fileContent);

if (!Number.isSafeInteger(n)) {
  n = BigInt(fileContent);
}

function findCellsCount(n) {
  let useBigInt = typeof n === "bigint";
  let left = useBigInt ? 1n : 1;
  let right = useBigInt ? BigInt(n) : n;

  function cellsNeeded(k) {
    if (useBigInt) {
      return (
        (k * (k + 1n)) / 2n -
        1n +
        (k * (k + 1n) * k) / 2n -
        ((k - 1n) * k * (k + 1n)) / 3n
      );
    } else {
      return (
        (k * (k + 1)) / 2 -
        1 +
        (k * (k + 1) * k) / 2 -
        ((k - 1) * k * (k + 1)) / 3
      );
    }
  }

  while (left < right) {
    let mid = useBigInt ? (left + right) / 2n : Math.floor((left + right) / 2);
    let needed = cellsNeeded(mid);

    if (needed < (useBigInt ? BigInt(n) : n)) {
      left = useBigInt ? mid + 1n : mid + 1;
    } else {
      right = mid;
    }
  }

  if (cellsNeeded(left) === (useBigInt ? BigInt(n) : n)) {
    return useBigInt ? left.toString() : left;
  }

  return useBigInt ? (left - 1n).toString() : left - 1;
}

let result = findCellsCount(n);

fs.writeFileSync("output.txt", result.toString());
