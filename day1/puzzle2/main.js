import {readFileSync} from 'fs';

const caloriesData = readFileSync('input.txt').toString().split("\n");
let calorieGroups, groupsTotalCalories, sortedGroupsTotalCalories, answer;

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

function sortGroupsTotalCalories() {
    return groupsTotalCalories.sort((a,b) => a - b).reverse();
}

function calcTopThreeCaloriesTotal() {
    let total = 0;
    for (let i = 0;i < 3; i++) {
        total += sortedGroupsTotalCalories[i];
    }
    return total;
}

calorieGroups = createGroupsFromData();
groupsTotalCalories = calcTotalCaloriesForGroups(calorieGroups);
sortedGroupsTotalCalories = sortGroupsTotalCalories(groupsTotalCalories);
answer = calcTopThreeCaloriesTotal(sortedGroupsTotalCalories);

console.log(answer);