const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.trim().split("\n");

const [n, k, d] = lines[0].split(" ").map(Number);

let y = 0; //число после приписывания доп цифры

let i = 0;

let numberFound = false;

if (k <= 0) {
  result = -1;
} else {
  for (let i = 0; i < 10; ++i) {
    y = n + i.toString();
    if (Number(y) % k == 0) {
      result = y;
      numberFound = true;
      break;
    }
  }

  if (numberFound) {
    for (let i = 0; i < d - 1; i++) {
      result += "0";
    }
  } else {
    result = -1;
  }
}
fs.writeFileSync("output.txt", result.toString());
