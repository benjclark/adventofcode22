import {readFileSync} from 'fs';

const caloriesData = readFileSync('input.txt').toString().split("\n");
let calorieGroups, groupsTotalCalories, answer;

function createGroupsFromData() {
    let groups = [[]];
    caloriesData.forEach(line => {
        if (line === "") {
            groups.push([]);
        } else {
            groups[groups.length - 1].push(Number.parseInt(line, 10));
        }
    });
    return groups;
}

function calcTotalCaloriesForGroups() {
    let total = [];
    calorieGroups.forEach(group => {
        total.push(group.reduce((accumulator, current) =>
                accumulator + current
            , 0));
    });
    return total;
}

calorieGroups = createGroupsFromData();
groupsTotalCalories = calcTotalCaloriesForGroups(calorieGroups);
answer = Math.max(...groupsTotalCalories);

console.log(answer);