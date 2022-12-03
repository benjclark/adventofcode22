import {readFileSync} from 'fs';

const scores = [['X', 1], ['Y', 2], ['Z', 3]];
const combinationOutcomes = [['A X', 3], ['A Y', 6], ['A Z', 0], ['B X', 0], ['B Y', 3], ['B Z', 6], ['C X', 6], ['C Y', 0], ['C Z', 3]];
const lookupScores = new Map(scores);
const lookupOutcomes = new Map(combinationOutcomes);

const gameArray = readFileSync('input.txt').toString().split("\n");
let totalScore = 0;
gameArray.forEach(combination => {
    totalScore += lookupOutcomes.get(combination) + lookupScores.get(combination[2]);
})
console.log(totalScore);