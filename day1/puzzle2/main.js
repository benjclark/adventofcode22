import {readFileSync} from 'fs';

const stringArray = readFileSync('input.txt').toString().split("\n");

const nestedNumsArrays = [[]];
stringArray.forEach(item => {
    if (item === "") {
        nestedNumsArrays.push([]);
    } else {
        const parsedItem = Number.parseInt(item, 10);
        nestedNumsArrays[nestedNumsArrays.length - 1].push(parsedItem);
    }
});

const results = [];
nestedNumsArrays.forEach(array => {
    results.push(array.reduce((accumulator, current) =>
        accumulator + current
    , 0));
});

const sortedResults = results.sort((a,b) => a - b).reverse();

let answer = 0;
for (let i = 0;i < 3; i++) {
    answer += sortedResults[i];
}
console.log(answer);