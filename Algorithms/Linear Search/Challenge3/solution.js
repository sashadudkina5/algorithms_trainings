const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split("\n");

let N = parseInt(lines[0], 10);

let long = lines[1].split(" ").map(Number);

let maxLong = long[0];
let othersSum = 0;
let result = 0;

for (let i = 1; i < long.length; i++) {
  //проходимся по всем длинам
  console.log(long[i]);
  if (long[i] > maxLong) {
    // находим максимально длинный кусок
    maxLong = long[i];
  }
}
console.log("maxLong", maxLong);

for (let j = 0; j < long.length; j++) {
  //сумма всех длин
  othersSum += long[j];
}
// Вычитаем длину максимальной верёвочки из общей суммы, чтобы получить сумму оставшихся
othersSum -= maxLong;

let firstResult = maxLong - othersSum;

if (firstResult <= 0) {
  result = othersSum + maxLong;
} else {
  result = firstResult;
}

fs.writeFileSync("output.txt", result.toString());
