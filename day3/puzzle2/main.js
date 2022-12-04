import {readFileSync} from 'fs';

const bagsContentsData = readFileSync('input.txt').toString().split("\n");
const priorityLookup = new Map();
const groups = [[]];
let totalScore;

function setupAlphabetScoringLookup() {
    for (let i = 0; i < 26; i++) {
        // a-z
        priorityLookup.set(String.fromCharCode(97 + i), i + 1)
    }
    for (let j = 0; j < 26; j++) {
        // A-Z
        priorityLookup.set(String.fromCharCode(65 + j), j + 27)
    }
}

function createGroupsOfThreeFromData() {
    bagsContentsData.forEach(data => {
        if (groups[groups.length - 1].length === 3) {
            groups.push([]);
        }
        groups[groups.length - 1].push(data);
    });
}

function findDuplicateCharacters(stringOne, stringTwo) {
    return [...stringOne].filter(character => {
        if (stringTwo.indexOf(character) > -1) {
            return character;
        }
    });
}

function findCommonCharacterPerGroup() {
    return groups.map(group => {
        const common = findDuplicateCharacters(group[0], group[1])
        return common.filter(character => {
            return group[2].indexOf(character) > -1;
        })[0];
    });
}

function calculateTotalScoreForCharacters(commonCharacters) {
    let total = 0;
    commonCharacters.forEach(character => {
        total += priorityLookup.get(character);
    });
    return total;
}

setupAlphabetScoringLookup();
createGroupsOfThreeFromData();
totalScore = calculateTotalScoreForCharacters(findCommonCharacterPerGroup());

console.log(totalScore);
