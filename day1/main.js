import {readFileSync} from 'fs';

const stringArray = readFileSync('input.txt').toString().split("\n");

const nestedNumsArrays = [[]];
stringArray.forEach(item => {
    if (item === "") {
        nestedNumsArrays.push([]);
    } else {
        const parsedItem = Number.parseInt(item, 10)
        nestedNumsArrays[nestedNumsArrays.length - 1].push(parsedItem);
    }
});

const results = [];
nestedNumsArrays.forEach(array => {
    results.push(array.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0));
});

console.log(Math.max(...results));