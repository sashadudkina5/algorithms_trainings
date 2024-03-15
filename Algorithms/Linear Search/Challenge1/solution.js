const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split("\n");

const K = parseInt(lines[0], 10);

const coordinates = [];

for (let i = 1; i <= K; i++) {
  const line = lines[i];
  const parts = line.split(" ").map(Number);
  coordinates.push(parts);
}

let minX = Infinity,
  maxX = -Infinity;
let minY = Infinity,
  maxY = -Infinity;

// Обход всех координат
for (let i = 0; i < K; i++) {
  const [x, y] = coordinates[i];

// Обновление минимальных и максимальных значений
  if (x < minX) minX = x;
  if (x > maxX) maxX = x;
  if (y < minY) minY = y;
  if (y > maxY) maxY = y;
}

const result = `${minX} ${minY} ${maxX} ${maxY}`;

fs.writeFileSync("output.txt", result);
