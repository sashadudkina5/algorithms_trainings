const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");
const allLines = fileContent.trim().split("\n");

let linesCount = parseInt(allLines[0], 10);
let lines = allLines.slice(1).map(Number);

let clicks = 0;

const Space = 1;
const Tab = 4;

let spacesNeeded = 0;
let tabsNeeded = 0;
let backspacesNeeded = 0;

for (let i = 0; i < linesCount; i++) {
  if (lines[i] === 0) {
    clicks = clicks + 0;
  }

  const rest = lines[i] % Tab;

  if (rest === 3 || lines[i] === 3) {
    tabsNeeded = (lines[i] - rest) / Tab + 1;
    backspacesNeeded = 1;
    clicks = clicks + tabsNeeded + backspacesNeeded;
  } else {
    spacesNeeded = rest / Space;
    tabsNeeded = (lines[i] - rest) / Tab;
    backspacesNeeded = 0;
    clicks = clicks + tabsNeeded + spacesNeeded + backspacesNeeded;
  }
}

fs.writeFileSync("output.txt", clicks.toString());
