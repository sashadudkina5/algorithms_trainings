const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split(/\r?\n/).filter(line => line);

const membersCount = parseInt(lines[0], 10);

const songs = [];
for (let i = 1; i < lines.length; i += 2) {
  const songCount = parseInt(lines[i], 10);
  const songName = lines[i + 1] ? lines[i + 1] : "";
  songs.push([songCount, songName]);
}

const songFrequency = {}; // Словарь для подсчета частоты песен
const result = []; // Массив для итогового плейлиста

for (let i = 0; i < songs.length; i++) {
  let [songCount, songList] = songs[i];
  let tracks = songList.split(' ');
  
    tracks.forEach(song => {
    if (songFrequency[song]) {
      songFrequency[song] += 1;
    } else {
      songFrequency[song] = 1;
    }
  })
}

for (const song in songFrequency) {
  if (songFrequency[song] === membersCount) {
    result.push(song);
  }
}

result.sort();

const resultString = `${result.length}\n${result.join(' ')}`;
fs.writeFileSync("output.txt", resultString.toString());