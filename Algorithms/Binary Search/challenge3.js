// Ограничение времени	- 4 секунды
// Ограничение памяти	- 256Mb
// Ввод	- стандартный ввод или input.txt
// Вывод	- стандартный вывод или output.txt

// Как известно, Саруман Радужный очень любит порядок. Поэтому все полки его войска стоят друг за другом,
// причем каждый следующий полк содержит количество орков не меньше, чем предыдущий.

// Перед тем как напасть на Хельмову Падь, Саруман решил провести несколько вылазок для разведки.
// Чтобы его отряды никто не заметил, он решил каждый раз отправлять несколько подряд идущих полков так,
// чтобы суммарное количество орков в них было равно определенному числу. Так как это всего лишь разведка,
// каждый полк после вылазки возвращается на свое место. Задачу выбрать нужные полки он поручил Гриме Змеиному Языку.
// А Грима не поскупится на вознаграждение, если вы ему поможете.

// Формат ввода
// В первой строке входного файла находится два целых числа: n (1 ≤ n ≤ 2⋅10^5) — количество полков
// и m (1 ≤ m ≤ 2⋅10^5) – количество предстоящих вылазок.

// В следующей строке записано n чисел ai, где ai — число орков в i-ом полке (1 ≤ ai ≤ 10^9, ai ≤ ai+1).

// Далее в m строках записаны запросы вида: количество полков l (1 ≤ l ≤ n), которые должны будут отправиться в эту вылазку,
//  и суммарное количество орков в этих полках s (1 ≤ s ≤ 2⋅10^16)

// Формат вывода
// Для каждого запроса выведите номер полка, с которого начнутся те l, которые необходимо отправить на вылазку.
// Если таких полков несколько, выведите любой. Если же так выбрать полки нельзя, выведите -1.

// Пример
// Ввод
// 5 2
// 1 3 5 7 9
// 2 4
// 1 3

// Вывод
// 1
// 2

// Язык: Node.js 20.10.0

const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.split(/\r?\n/).filter((line) => line.trim());
const [n, m] = lines[0].split(" ").map(Number);
const armies = lines[1].split(" ").map(Number);
const queries = lines.slice(2).map((line) => line.split(" ").map(Number));

function findStartingIndex(prefixSum, targetSum, length, n) {
  let low = 0,
    high = n - length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let currentSum = prefixSum[mid + length] - prefixSum[mid];
    if (currentSum === targetSum) return mid + 1;
    else if (currentSum < targetSum) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

let prefixSum = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  prefixSum[i] = prefixSum[i - 1] + armies[i - 1];
}

let results = [];

for (let query of queries) {
  const [length, targetSum] = query;
  const startIndex = findStartingIndex(prefixSum, targetSum, length, n);
  results.push(startIndex);
}

results = results.join("\n");

fs.writeFileSync("output.txt", results.toString());
