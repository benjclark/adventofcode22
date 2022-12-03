import {readFileSync} from 'fs';

const scores = [['X', 1], ['Y', 2], ['Z', 3]];
const combinationOutcomes = [['A X', 0], ['A Y', 3], ['A Z', 6], ['B X', 0], ['B Y', 3], ['B Z', 6], ['C X', 0], ['C Y', 3], ['C Z', 6]];
const combinationHands = [['A X', 'Z'], ['A Y', 'X'], ['A Z', 'Y'], ['B X', 'X'], ['B Y', 'Y'], ['B Z', 'Z'], ['C X', 'Y'], ['C Y', 'Z'], ['C Z', 'X']];
const lookupScores = new Map(scores);
const lookupOutcomes = new Map(combinationOutcomes);
const lookupHands = new Map(combinationHands);

const gameArray = readFileSync('input.txt').toString().split("\n");
let totalScore = 0;
gameArray.forEach(combination => {
    totalScore += lookupOutcomes.get(combination) + lookupScores.get(lookupHands.get(combination));
})
console.log(totalScore)