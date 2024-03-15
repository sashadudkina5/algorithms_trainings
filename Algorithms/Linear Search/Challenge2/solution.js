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
