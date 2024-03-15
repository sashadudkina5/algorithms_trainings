const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split("\n").filter((line) => line.trim() !== "");

let field = lines.slice(0, 8).map((line) => {
  return line.substring(0, 8).trim().split("");
});

const dxVH = [-1, 0, 1, 0];
const dyVH = [0, 1, 0, -1];

const dxDiag = [-1, -1, 1, 1];
const dyDiag = [-1, 1, 1, -1];

let positionOfR = [];
let positionOfB = [];

for (let i = 0; i < field.length; i++) {
  for (let j = 0; j < field[i].length; j++) {
    if (field[i][j] === "R") {
      positionOfR.push([i, j]);
    } else if (field[i][j] === "B") {
      positionOfB.push([i, j]);
    }
  }
}

//Закрашиваем ходы ладей

for (let i = 0; i < positionOfR.length; i++) {
  let [xR, yR] = positionOfR[i];

  for (let k = 0; k < 4; k++) {
    let nx = xR + dxVH[k];
    let ny = yR + dyVH[k];

    while (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
      if (field[nx][ny] != "B" && field[nx][ny] != "R") {
        field[nx][ny] = "1";
        nx += dxVH[k];
        ny += dyVH[k];
      } else {
        break;
      }
    }
  }
}

//Закрашиваем ходы слонов
for (let i = 0; i < positionOfB.length; i++) {
  let [xB, yB] = positionOfB[i];

  for (let k = 0; k < 4; k++) {
    let nx = xB + dxDiag[k];
    let ny = yB + dyDiag[k];

    while (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
      if (field[nx][ny] != "R" && field[nx][ny] != "B") {
        field[nx][ny] = "1";
        nx += dxDiag[k];
        ny += dyDiag[k];
      } else {
        break;
      }
    }
  }
}

let result = 0;

for (let i = 0; i < field.length; i++) {
  for (let j = 0; j < field[i].length; j++) {
    if (field[i][j] === "*") {
      result++;
    }
  }
}

fs.writeFileSync("output.txt", result.toString());
