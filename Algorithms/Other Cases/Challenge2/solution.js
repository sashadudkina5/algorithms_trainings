const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.trim().split("\n");

let [A1, B1] = lines[0].split(":").map(Number);

let [A2, B2] = lines[1].split(":").map(Number);

let where = Number(lines[2]);

const totalA = A1 + A2;

const totalB = B1 + B2;

let goalsNeeded = 0;

if (totalB >= totalA) {
  const differenceA = totalB - totalA;

  A2 = A2 + differenceA;
  if ((where === 1 && B1 < A2) || (where !== 1 && B2 < A1)) {
    goalsNeeded = differenceA;
  } else {
    goalsNeeded = differenceA + 1;
  }
}

fs.writeFileSync("output.txt", goalsNeeded.toString());
