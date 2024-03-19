const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split(/\r?\n/).filter(line => line);

const numbersCount = parseInt(lines[0], 10);

let numbers = lines[1].split(' ').map(Number);

numbers.sort((a, b) => a - b);

const freq = {};
numbers.forEach(num => {
  freq[num] = (freq[num] || 0) + 1;
});

let maxGroup = 0;

Object.keys(freq).forEach(num => {
  num = parseInt(num);
  let currentGroup = freq[num] + (freq[num + 1] || 0);
  maxGroup = Math.max(maxGroup, currentGroup);
});

let result = numbersCount - maxGroup;

fs.writeFileSync("output.txt", result.toString());