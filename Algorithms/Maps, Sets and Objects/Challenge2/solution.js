const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", "utf8");

const words = fileContent.split(/\r?\n/).filter(line => line.trim() !== '');

let secondWordFreq = {};
let firstWordFreq = {};
let result = "YES";

const countLetters = (word, freq) => {
    for (const letter of word) {
        if (freq[letter]) {
            freq[letter]++;
        } else {
            freq[letter] = 1;
        }
    }
    return freq;
}

countLetters(words[1], secondWordFreq);
countLetters(words[0], firstWordFreq);

for (const letter in firstWordFreq) {
    if (firstWordFreq[letter] !== secondWordFreq[letter]) {
        result = "NO";
        break;
    }
}

fs.writeFileSync("output.txt", result.toString());