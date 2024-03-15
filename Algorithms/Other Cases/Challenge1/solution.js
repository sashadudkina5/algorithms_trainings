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
