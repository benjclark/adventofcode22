import {readFileSync} from 'fs';

const combinationData = readFileSync('input.txt').toString().split("\n");
const lookupScores = new Map([['X', 1], ['Y', 2], ['Z', 3]]);
const lookupOutcomes = new Map([['A X', 3], ['A Y', 6], ['A Z', 0], ['B X', 0], ['B Y', 3], ['B Z', 6], ['C X', 6], ['C Y', 0], ['C Z', 3]]);
let totalScore = 0;

combinationData.forEach(combination => {
    totalScore += lookupOutcomes.get(combination) + lookupScores.get(combination[2]);
})
console.log(totalScore);