// Part 1

let numFrogs = Number(prompt("How many frogs are about to jump in?"));

const MaxFrogs = 15;

let overCapacity = numFrogs > MaxFrogs

let message = overCapacity ? "It's too crowded!" : "Come on in!";

print(message)

// Part 2 

let activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];

let input = Number(prompt("Enter a number to choose an activity:"));

let index = input % activities.length;

print(activities[index])




