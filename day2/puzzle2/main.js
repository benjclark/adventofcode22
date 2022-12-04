import {readFileSync} from 'fs';

const combinationData = readFileSync('input.txt').toString().split("\n");
const lookupScores = new Map([['X', 1], ['Y', 2], ['Z', 3]]);
const lookupOutcomes = new Map([['A X', 0], ['A Y', 3], ['A Z', 6], ['B X', 0], ['B Y', 3], ['B Z', 6], ['C X', 0], ['C Y', 3], ['C Z', 6]]);
const lookupHands = new Map([['A X', 'Z'], ['A Y', 'X'], ['A Z', 'Y'], ['B X', 'X'], ['B Y', 'Y'], ['B Z', 'Z'], ['C X', 'Y'], ['C Y', 'Z'], ['C Z', 'X']]);
let totalScore = 0;

combinationData.forEach(combination => {
    totalScore += lookupOutcomes.get(combination) + lookupScores.get(lookupHands.get(combination));
})
console.log(totalScore)