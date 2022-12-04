import {readFileSync} from 'fs';

const bagsContentsData = readFileSync('input.txt').toString().split("\n");
const priorityLookup = new Map();
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

function findDuplicateCharacter(stringOne, stringTwo) {
    return [...stringOne].filter(character => {
        if (stringTwo.indexOf(character) > -1) {
            return character;
        }
    })[0];
}

function findCommonCharacters() {
    return bagsContentsData.map(data => {
        const firstHalfString = data.substring(0, data.length / 2);
        const secondHalfString = data.substring(data.length / 2, data.length);
        return findDuplicateCharacter(firstHalfString, secondHalfString);
    });
}

function calculateTotalScoreForCharacters(characters) {
    let total = 0;
    characters.forEach(character => {
        total += priorityLookup.get(character);
    });
    return total;
}

setupAlphabetScoringLookup();
totalScore = calculateTotalScoreForCharacters(findCommonCharacters());

console.log(totalScore);