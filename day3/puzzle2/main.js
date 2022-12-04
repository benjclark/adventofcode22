import {readFileSync} from 'fs';

const bagsContentsData = readFileSync('input.txt').toString().split("\n");

const priorityLookup = new Map();

for (let i = 0; i < 26; i++) {
    // a-z
    priorityLookup.set(String.fromCharCode(97 + i), i + 1)
}
for (let j = 0; j < 26; j++) {
    // A-Z
    priorityLookup.set(String.fromCharCode(65 + j), j + 27)
}

// put everything in groups of 3
const groups = [[]];
bagsContentsData.forEach(data => {
    if (groups[groups.length - 1].length === 3) {
        groups.push([]);
    }
    groups[groups.length - 1].push(data);
});

function findDuplicateChar(stringOne, stringTwo) {
    return [...stringOne].filter(character => {
        if (stringTwo.indexOf(character) > -1) {
            return character;
        }
    });
}

// find common character per group of 3
const commonCharactersPerGroup = groups.map(group => {
    const common = findDuplicateChar(group[0], group[1])
    return common.filter(character => {
        return group[2].indexOf(character) > -1;
    });
});

// calculate score for all common characters
let total = 0;
commonCharactersPerGroup.forEach(characterArray => {
    total += priorityLookup.get(characterArray[0]);
});

console.log(total);
