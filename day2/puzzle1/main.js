import {readFileSync} from 'fs';

const scores = [['X', 1], ['Y', 2], ['Z', 3]];
const combinationOutcomes = [['A X', 3], ['A Y', 6], ['A Z', 0], ['B X', 0], ['B Y', 3], ['B Z', 6], ['C X', 6], ['C Y', 0], ['C Z', 3]];
const lookup = new Map;

scores.forEach(array => {
    lookup.set(...array);
});
combinationOutcomes.forEach(array => {
    lookup.set(...array);
});

const gameArray = readFileSync('input.txt').toString().split("\n");
let totalScore = 0;
gameArray.forEach(combination => {
    totalScore += lookup.get(combination) + lookup.get(combination[2]);
})
console.log(totalScore);