const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.trim().split("\n");

let n = parseInt(lines[0], 10);

let array = lines[1].split(" ").map(Number);

let lastDigits = array.map(function (number) {
  let lastDigit = Math.abs(number) % 10;
  return number < 0 ? -lastDigit : lastDigit;
});

let y = lastDigits[0];

let NewArray = [];

for (let i = 1; i < n; i++) {
  if (y % 2 == 0) {
    // основа четная
    y = y + lastDigits[i]; //Четное + четное = четное ИЛИ Четное + нечетное = нечетное
    NewArray.push("+");
  } else {
    // основа нечетная
    if (lastDigits[i] % 2 == 0) {
      // следующее число четное
      y = y + lastDigits[i]; //Четное + нечетное = нечетное
      NewArray.push("+");
    } else {
      // следующее число нечетное
      y = y * lastDigits[i]; // Нечетное * нечетное = нечетное
      NewArray.push("x");
    }
  }

  y = (Math.abs(y) % 10) * Math.sign(y);
}

let result = NewArray.join("");

fs.writeFileSync("output.txt", result.toString());
