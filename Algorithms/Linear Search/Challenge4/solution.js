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
